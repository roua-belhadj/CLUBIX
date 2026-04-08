import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MemberDocs({ onBack }) {
    const ads = [
    { id: 1, title: "Recruitment Poster", desc: "For new members integration" },
    { id: 2, title: "Event Banner", desc: "Promotion for next week" }
    ];

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onBack} style={styles.back}><Text style={styles.backText}>← Portal</Text></TouchableOpacity>
        <Text style={styles.title}>Announcements & Ads</Text>
        <ScrollView>
        {ads.map(ad => (
            <View key={ad.id} style={styles.adCard}>
            <Text style={{fontSize: 40}}>🖼️</Text>
            <View style={{marginLeft: 15}}>
                <Text style={styles.adTitle}>{ad.title}</Text>
                <Text style={styles.adDesc}>{ad.desc}</Text>
            </View>
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
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    adCard: { flexDirection: 'row', backgroundColor: '#FFF', padding: 20, borderRadius: 15, marginBottom: 15, alignItems: 'center' },
    adTitle: { fontSize: 16, fontWeight: 'bold' },
    adDesc: { color: '#888', fontSize: 12 }
});