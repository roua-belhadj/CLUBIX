import React, { useState } from 'react';
import { 
    View, Text, StyleSheet, TextInput, ScrollView, 
    TouchableOpacity, Alert, KeyboardAvoidingView, Platform 
} from 'react-native';

// On ajoute { onBack } pour pouvoir fermer le formulaire
export default function FormulaireAdhesion({ onBack }) {
    const [form, setForm] = useState({
    nom: '', prenom: '', tel: '', email: '', 
    universite: '', specialite: '', interet: ''
    });

    const handleSubmit = () => {
    Alert.alert("Succès", "Votre demande d'adhésion a été envoyée !");
    if(onBack) onBack(); // Retourne à l'accueil après l'envoi
    };

    return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
      {/* Bouton Retour en haut à gauche */}
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>⬅ Retour au Club</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Rejoindre le Club 🚀</Text>
        <Text style={styles.subtitle}>Remplissez le formulaire pour devenir membre</Text>

        {/* Section Identité */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>👤 Identité</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Nom" 
            placeholderTextColor="#999"
            onChangeText={(t) => setForm({...form, nom: t})}
            />
            <TextInput 
            style={styles.input} 
            placeholder="Prénom" 
            placeholderTextColor="#999"
            onChangeText={(t) => setForm({...form, prenom: t})}
            />
        </View>

        {/* Section Contact */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>📞 Contact</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Numéro de téléphone" 
            keyboardType="phone-pad"
            placeholderTextColor="#999"
            onChangeText={(t) => setForm({...form, tel: t})}
            />
            <TextInput 
            style={styles.input} 
            placeholder="Adresse Mail" 
            keyboardType="email-address"
            placeholderTextColor="#999"
            onChangeText={(t) => setForm({...form, email: t})}
            />
        </View>

        {/* Section Études & Spécialité */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎓 Études & Spécialité</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Université (ex: Faculté de Mahdia)" 
            placeholderTextColor="#999"
            onChangeText={(t) => setForm({...form, universite: t})}
            />
            <TextInput 
            style={styles.input} 
            placeholder="Spécialité (ex: Informatique)" 
            placeholderTextColor="#999"
            onChangeText={(t) => setForm({...form, specialite: t})}
            />
            <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Centres d'intérêt (IA, Design, Sport...)" 
            multiline={true}
            numberOfLines={3}
            placeholderTextColor="#999"
            onChangeText={(t) => setForm({...form, interet: t})}
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Envoyer ma demande</Text>
        </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F0F2F5' },
    backButton: { padding: 15, marginTop: 10 },
    backText: { color: '#6200ee', fontWeight: 'bold' },
    scroll: { padding: 20 },
    title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', textAlign: 'center' },
    subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 25 },
    section: { 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    padding: 15, 
    marginBottom: 20,
    elevation: 3
    },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#6200ee', marginBottom: 15 },
    input: { 
    backgroundColor: '#F9F9F9', 
    borderRadius: 10, 
    padding: 12, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#EEE',
    color: '#333' 
    },
    textArea: { height: 80, textAlignVertical: 'top' },
    button: { 
    backgroundColor: '#6200ee', 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 40 
    },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});