import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MemberEvents({ onBack }) {
    const data = [
    { id: 1, event: "Tech Workshop", task: "Setup the projector", status: "Ongoing" },
    { id: 2, event: "Club Meeting", task: "Take minutes of meeting", status: "Pending" }
    ];

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onBack} style={styles.back}><Text style={styles.backText}>← Portal</Text></TouchableOpacity>
        <Text style={styles.title}>Events & My Tasks</Text>
        <ScrollView>
        {data.map(item => (
            <View key={item.id} style={styles.card}>
            <Text style={styles.eventTitle}>{item.event}</Text>
            <Text style={styles.taskText}>🎯 Task: {item.task}</Text>
            <View style={styles.statusBadge}><Text style={styles.statusText}>{item.status}</Text></View>
            </View>
        ))}
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
    back: { marginTop: 40, marginBottom: 20 },
    backText: { color: '#6A3FB6', fontWeight: 'bold' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
    card: { backgroundColor: '#FFF', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 3 },
    eventTitle: { fontSize: 18, fontWeight: 'bold', color: '#6A3FB6' },
    taskText: { marginVertical: 10, color: '#555' },
    statusBadge: { backgroundColor: '#EC4899', alignSelf: 'flex-start', paddingHorizontal: 10, borderRadius: 5 },
    statusText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' }
});