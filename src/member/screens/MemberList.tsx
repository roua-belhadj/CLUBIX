import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function MemberList({ onBack }) {
    const members = [
    { id: '1', name: 'Ilham', role: 'Président', date: '2024' },
    { id: '2', name: 'Rihab', role: 'Vice-Président', date: '2025' },
    { id: '3', name: 'Ahmed', role: 'Trésorier', date: '2025' },
    ];

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onBack} style={styles.back}><Text style={styles.backText}>← Portal</Text></TouchableOpacity>
        <Text style={styles.title}>Club Directory</Text>
        <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View style={styles.item}>
            <View style={styles.miniAvatar}><Text>👤</Text></View>
            <View style={{flex: 1, marginLeft: 15}}>
                <Text style={styles.mName}>{item.name}</Text>
                <Text style={styles.mRole}>{item.role} • {item.date}</Text>
            </View>
            <TouchableOpacity style={styles.chatIcon}><Text style={{fontSize: 20}}>💬</Text></TouchableOpacity>
            </View>
        )}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F3F4F6' },
    back: { marginTop: 40, marginBottom: 20 },
    backText: { color: '#6A3FB6', fontWeight: 'bold' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 15, borderRadius: 12, marginBottom: 10 },
    miniAvatar: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#EEE', justifyContent: 'center', alignItems: 'center' },
    mName: { fontWeight: 'bold', fontSize: 16 },
    mRole: { fontSize: 12, color: '#666' },
    chatIcon: { padding: 5 }
});