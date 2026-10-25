import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';

export default function AdminLogin({ onLoginSuccess, onBack }) {
    const [code, setCode] = useState('');
  const SECRET_CODE = '1234'; // Tu pourras changer ce code plus tard

    const handleLogin = () => {
    if (code === SECRET_CODE) {
        onLoginSuccess();
    } else {
        Alert.alert("Access Denied", "Incorrect Administrator Code.");
        setCode('');
    }
    };

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#1A1A1A" barStyle="light-content" />
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backText}>← Exit</Text>
        </TouchableOpacity>

        <View style={styles.content}>
        <Text style={styles.lockIcon}>🛡️</Text>
        <Text style={styles.title}>Admin Access</Text>
        <Text style={styles.subtitle}>Please enter your security code to continue.</Text>

        <TextInput
            style={styles.input}
            placeholder="Enter Code"
            placeholderTextColor="#999"
            keyboardType="numeric"
            secureTextEntry={true}
            value={code}
            onChangeText={setCode}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>VERIFY CODE</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#1A1A1A', padding: 20 },
    backBtn: { marginTop: 40 },
    backText: { color: '#EC4899', fontWeight: 'bold' },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    lockIcon: { fontSize: 60, marginBottom: 20 },
    title: { color: '#FFF', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { color: '#AAA', textAlign: 'center', marginBottom: 30 },
    input: { 
    backgroundColor: '#333', color: '#FFF', width: '80%', padding: 15, 
    borderRadius: 10, textAlign: 'center', fontSize: 20, letterSpacing: 5, marginBottom: 20 
    },
    loginBtn: { backgroundColor: '#10B981', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30 },
    loginBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});