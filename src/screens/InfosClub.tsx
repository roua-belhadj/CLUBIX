import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function InfosClub({ onJoin, onEvents, onBack }) {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome Newcomer! ✨</Text>
        <TouchableOpacity style={styles.btn} onPress={onJoin}><Text style={styles.text}>Join the Club</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onEvents}><Text style={styles.text}>View Events</Text></TouchableOpacity>
        <TouchableOpacity style={styles.back} onPress={onBack}><Text style={styles.backText}>Go Back</Text></TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F9FA' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
    btn: { backgroundColor: '#6A3FB6', padding: 15, borderRadius: 10, width: '80%', marginBottom: 15, alignItems: 'center' },
    text: { color: '#FFF', fontWeight: 'bold' },
    back: { marginTop: 20 },
    backText: { color: '#666' }
});