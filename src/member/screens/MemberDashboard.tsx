import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import MemberProfile from './MemberProfile';
import MemberEvents from './MemberEvents';
import MemberDocs from './MemberDocs';
import MemberList from './MemberList';
export default function MemberDashboard({ onLogout }) {
    const [activeTab, setActiveTab] = useState('menu');

    if (activeTab === 'profile') return <MemberProfile onBack={() => setActiveTab('menu')} />;
    if (activeTab === 'events') return <MemberEvents onBack={() => setActiveTab('menu')} />;
    if (activeTab === 'docs') return <MemberDocs onBack={() => setActiveTab('menu')} />;
    if (activeTab === 'annuaire') return <MemberList onBack={() => setActiveTab('menu')} />;

    const cards = [
    { id: 'profile', title: 'My Profile', icon: '👤', color: '#EC4899' },
    { id: 'events', title: 'Club Events', icon: '📅', color: '#6A3FB6' },
    { id: 'docs', title: 'Shared Docs', icon: '📄', color: '#10B981' },
    { id: 'annuaire', title: 'Members', icon: '👥', color: '#F59E0B' },
    ];

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#6A3FB6" barStyle="light-content" />
        <View style={styles.header}>
        <Text style={styles.headerTitle}>CLUBIX MEMBER</Text>
        <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
        <View style={styles.grid}>
            {cards.map(card => (
            <TouchableOpacity key={card.id} style={[styles.card, { borderLeftColor: card.color }]} onPress={() => setActiveTab(card.id)}>
                <Text style={styles.cardIcon}>{card.icon}</Text>
                <Text style={styles.cardTitle}>{card.title}</Text>
            </TouchableOpacity>
            ))}
        </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    header: { backgroundColor: '#6A3FB6', padding: 20, paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between' },
    headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
    logoutBtn: { backgroundColor: '#FFF', paddingHorizontal: 12, borderRadius: 15, justifyContent: 'center' },
    logoutText: { color: '#6A3FB6', fontWeight: 'bold', fontSize: 12 },
    menuContainer: { flex: 1, justifyContent: 'center', padding: 20 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    card: { backgroundColor: '#FFF', width: '48%', padding: 25, borderRadius: 15, marginBottom: 20, elevation: 5, borderLeftWidth: 5 },
    cardIcon: { fontSize: 30, marginBottom: 10 },
    cardTitle: { fontWeight: 'bold', color: '#333' }
});