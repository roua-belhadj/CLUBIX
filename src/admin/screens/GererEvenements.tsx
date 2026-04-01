import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function GererEvenements({ onBack }) {
    return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>New Event</Text>
        </View>
        <View style={styles.form}>
        <Text style={styles.label}>Event Name</Text>
        <TextInput style={styles.input} placeholder="Ex: Workshop React Native" />
        
        <Text style={styles.label}>Room / Location</Text>
        <TextInput style={styles.input} placeholder="Ex: Room 402 - Bâtiment B" />

        <Text style={styles.label}>Date & Time</Text>
        <TextInput style={styles.input} placeholder="DD/MM/YYYY -- 14:00" />

        <TouchableOpacity style={styles.mainBtn}>
            <Text style={styles.mainBtnText}>Publish Event 📅</Text>
        </TouchableOpacity>

        <View style={styles.previewCard}>
            <Text style={styles.previewTitle}>Next Event Countdown</Text>
            <Text style={styles.timer}>04 Days : 12 Hours : 30 Mins</Text>
        </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    header: { padding: 20, paddingTop: 50, backgroundColor: '#1A1A1A', flexDirection: 'row', alignItems: 'center' },
    back: { color: '#10B981', fontWeight: 'bold', marginRight: 20 },
    title: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
    form: { padding: 20 },
    label: { fontSize: 14, fontWeight: 'bold', color: '#444', marginBottom: 5 },
    input: { backgroundColor: '#FFF', padding: 12, borderRadius: 8, marginBottom: 20, borderWidth: 1, borderColor: '#DDD' },
    mainBtn: { backgroundColor: '#10B981', padding: 15, borderRadius: 10, alignItems: 'center' },
    mainBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    previewCard: { marginTop: 30, backgroundColor: '#1A1A1A', padding: 20, borderRadius: 15, alignItems: 'center' },
    previewTitle: { color: '#CCC', fontSize: 12, marginBottom: 10 },
    timer: { color: '#FFF', fontSize: 20, fontWeight: '900', letterSpacing: 1 }
});