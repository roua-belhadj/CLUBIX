import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

const THEME_MEMBER = '#6A3FB6';

export default function MemberLogin({ onLoginSuccess, onBack }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor={THEME_MEMBER} barStyle="light-content" />
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backText}>← Portal</Text>
        </TouchableOpacity>

        <View style={styles.content}>
        <Text style={styles.logoIcon}>🚀</Text>
        <Text style={styles.title}>Member Access</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        <TextInput
            style={styles.input}
            placeholder="Member Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
        />

        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={onLoginSuccess}>
            <Text style={styles.loginBtnText}>LOGIN AS MEMBER</Text>
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
    logoIcon: { fontSize: 60, marginBottom: 20 },
    title: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
    subtitle: { color: '#AAA', marginBottom: 30 },
    input: { backgroundColor: '#333', color: '#FFF', width: '90%', padding: 15, borderRadius: 10, marginBottom: 15 },
    loginBtn: { backgroundColor: THEME_MEMBER, padding: 15, borderRadius: 30, width: '90%', alignItems: 'center' },
    loginBtnText: { color: '#FFF', fontWeight: 'bold' }
});