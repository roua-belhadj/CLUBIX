const mysql = require('mysql2');

// On crée la connexion avec les paramètres de ton XAMPP
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Utilisateur par défaut de XAMPP
    password: '',      // Mot de passe vide par défaut sur XAMPP
    database: 'clubix_db' // Le nom de la base que tu as créée sur phpMyAdmin
});

// On teste si la connexion fonctionne
connection.connect(error => {
    if (error) {
        console.error("❌ Erreur de connexion MySQL :", error.message);
        return;
    }
    console.log("✅ Succès ! Le Backend est branché à MySQL.");
});

// Très important : on exporte la connexion pour que server.js puisse l'utiliser
module.exports = connection;