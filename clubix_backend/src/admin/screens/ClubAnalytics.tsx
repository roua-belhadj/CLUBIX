import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ClubAnalytics({ onBack }) {
    const stats = [
    { label: 'Active Members', value: '124', growth: '+12%', color: '#6A3FB6' },
    { label: 'Pending Visitors', value: '08', growth: 'New', color: '#EC4899' },
    { label: 'Monthly Visitors', value: '1.2k', growth: '+5%', color: '#10B981' },
    { label: 'Interaction Rate', value: '85%', growth: 'High', color: '#F59E0B' },
    ];

    return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>Club Insights</Text>
        </View>
        <ScrollView style={{ padding: 20 }}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.statsGrid}>
            {stats.map((s, i) => (
            <View key={i} style={styles.statCard}>
                <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
                <View style={styles.badge}><Text style={styles.badgeText}>{s.growth}</Text></View>
            </View>
            ))}
        </View>
        <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>Engagement Chart (Visual Simulation)</Text>
            <View style={styles.barRow}>
            <View style={[styles.bar, { height: 40 }]} /><View style={[styles.bar, { height: 70 }]} />
            <View style={[styles.bar, { height: 50 }]} /><View style={[styles.bar, { height: 90 }]} />
            <View style={[styles.bar, { height: 60 }]} />
            </View>
        </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6' },
    header: { padding: 20, paddingTop: 50, backgroundColor: '#1A1A1A', flexDirection: 'row', alignItems: 'center' },
    back: { color: '#F59E0B', fontWeight: 'bold', marginRight: 20 },
    title: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
    sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#1A1A1A' },
    statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    statCard: { backgroundColor: '#FFF', width: '48%', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 2, alignItems: 'center' },
    statValue: { fontSize: 24, fontWeight: '900' },
    statLabel: { fontSize: 12, color: '#777', marginVertical: 5 },
    badge: { backgroundColor: '#F0F0F0', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 5 },
    badgeText: { fontSize: 10, color: '#555', fontWeight: 'bold' },
    chartPlaceholder: { backgroundColor: '#FFF', padding: 20, borderRadius: 15, marginTop: 10, alignItems: 'center' },
    chartText: { fontSize: 12, color: '#AAA', marginBottom: 15 },
    barRow: { flexDirection: 'row', alignItems: 'flex-end', height: 100 },
    bar: { width: 30, backgroundColor: '#6A3FB6', marginHorizontal: 5, borderRadius: 5 }
});