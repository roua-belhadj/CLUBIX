import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type MemberProfileProps = {
    onBack: () => void;
};

export default function MemberProfile({ onBack }: MemberProfileProps) {
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onBack} style={styles.back}><Text style={styles.backText}>← Portal</Text></TouchableOpacity>
        <View style={styles.profileCard}>
            <View style={styles.avatar}><Text style={{fontSize: 50}}>👤</Text></View>
            <Text style={styles.name}>Belhadj Roua</Text>
            <Text style={styles.role}>Ressources Humaines</Text>
            <Text style={styles.date}>Joined: 07/04/2026</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6', padding: 20 },
    back: { marginTop: 40 },
    backText: { color: '#6A3FB6', fontWeight: 'bold' },
    profileCard: { alignItems: 'center', marginTop: 50, backgroundColor: '#FFF', padding: 30, borderRadius: 20, elevation: 4 },
    avatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#EEE', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    name: { fontSize: 24, fontWeight: 'bold', color: '#333' },
    role: { fontSize: 18, color: '#6A3FB6', marginVertical: 5, fontWeight: '600' },
    date: { color: '#999', marginTop: 10 }
});