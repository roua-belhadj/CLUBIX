// 1. IMPORTATION DES OUTILS
const express = require('express'); 
const mysql = require('mysql2');    
const cors = require('cors');       

const app = express();

// 2. CONFIGURATION
app.use(cors());          
app.use(express.json());  

// 3. CONNEXION À LA BASE DE DONNÉES (MySQL)
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',      
    password: '',      
    database: 'clubix_db' 
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion SQL : ' + err.stack);
        return;
    }
    console.log('Bravo ! Tu es connectée à la base MySQL de Clubix.');
});

// 4. LES ROUTES

// Test : Vérifier si le serveur répond
app.get('/', (req, res) => {
    res.send("Le serveur Clubix est opérationnel !");
});

// Action : Inscrire un membre
app.post('/inscription', (req, res) => {
    const { nom, prenom, tel, email, universite, specialite, interet } = req.body;

    const sql = `INSERT INTO utilisateurs 
                 (nom, prenom, tel, email, universite, specialite, interet) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nom, prenom, tel, email, universite, specialite, interet], (err, result) => {
        if (err) {
            console.error("Erreur SQL:", err);
            return res.status(500).json({ message: "Erreur lors de l'enregistrement." });
        }
        res.status(201).json({ message: "Membre enregistré avec succès !" });
    });
});

// Action : Connexion Admin
app.post('/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === "1234") { // On utilise 1234 pour correspondre au frontend
        res.json({ success: true, message: "Bienvenue Admin !" });
    } else {
        res.status(401).json({ success: false, message: "Code incorrect" });
    }
});

// Action : Voir les demandes pour l'Admin
app.get('/admin/demandes', (req, res) => {
    const sql = "SELECT * FROM utilisateurs ORDER BY date_inscription DESC";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Erreur SQL:", err);
            return res.status(500).json({ message: "Erreur lors de la récupération." });
        }
        res.json(results);
    });
});

// 5. LANCEMENT DU SERVEUR
app.listen(3000, () => {
    console.log("Serveur Clubix démarré sur le port 3000");
});