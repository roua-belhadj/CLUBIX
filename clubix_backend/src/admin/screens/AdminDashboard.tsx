import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

import DemandesAdhesion from './DemandesAdhesion';
import GererEvenements from './GererEvenements';
import ClubAnalytics from './ClubAnalytics';
import GererMembres from './GererMembres'; // Import de l'écran Membres

export default function AdminDashboard({ onBack }) {
  const [activeSubScreen, setActiveSubScreen] = useState(null);

  if (activeSubScreen === 'requests') return <DemandesAdhesion onBack={() => setActiveSubScreen(null)} />;
  if (activeSubScreen === 'events') return <GererEvenements onBack={() => setActiveSubScreen(null)} />;
  if (activeSubScreen === 'stats') return <ClubAnalytics onBack={() => setActiveSubScreen(null)} />;
  if (activeSubScreen === 'members') return <GererMembres onBack={() => setActiveSubScreen(null)} />;

  const adminCards = [
    { id: 'requests', title: 'Pending Requests', icon: '📩', color: '#EC4899', desc: 'Approve visitors' },
    { id: 'members', title: 'Member List', icon: '👥', color: '#6A3FB6', desc: 'Roles & Staff' },
    { id: 'events', title: 'Manage Events', icon: '📅', color: '#10B981', desc: 'Plan activities' },
    { id: 'stats', title: 'Club Analytics', icon: '📊', color: '#F59E0B', desc: 'Track dynamics' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1A1A1A" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.logout}>← Logout</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Admin Panel 🛡️</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.welcome}>Control Center</Text>
        <Text style={styles.subtitle}>Welcome back, Administrator.</Text>
        <View style={styles.grid}>
          {adminCards.map((card) => (
            <TouchableOpacity 
              key={card.id} 
              style={[styles.card, { borderTopColor: card.color }]} 
              onPress={() => setActiveSubScreen(card.id)}
            >
              <Text style={styles.cardIcon}>{card.icon}</Text>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDesc}>{card.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Les styles restent les mêmes que précédemment
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: { backgroundColor: '#1A1A1A', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center' },
  logout: { color: '#EC4899', fontWeight: 'bold', marginRight: 20 },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  scroll: { padding: 20 },
  welcome: { fontSize: 26, fontWeight: '900', color: '#1A1A1A' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 25 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { backgroundColor: '#FFF', width: '48%', padding: 15, borderRadius: 15, marginBottom: 15, elevation: 4, borderTopWidth: 5 },
  cardIcon: { fontSize: 28, marginBottom: 5 },
  cardTitle: { fontSize: 15, fontWeight: 'bold' },
  cardDesc: { fontSize: 11, color: '#999', marginTop: 3 }
});