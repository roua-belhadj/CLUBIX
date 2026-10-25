import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const DEMANDES_DATA = [
  { id: '1', name: 'Amine Ben Salem', date: '30/03/2026', status: 'Student' },
  { id: '2', name: 'Sarah Mansour', date: '29/03/2026', status: 'Designer' },
];

export default function DemandesAdhesion({ onBack }) {
  const handleAction = (name, action) => {
    Alert.alert("Success", `${name} has been ${action}.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>Pending Approval</Text>
      </View>
      <FlatList
        data={DEMANDES_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.info}>{item.status} • Received: {item.date}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.btnApprove} onPress={() => handleAction(item.name, 'approved')}>
                <Text style={styles.btnText}>✓</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnReject} onPress={() => handleAction(item.name, 'rejected')}>
                <Text style={styles.btnText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#1A1A1A', flexDirection: 'row', alignItems: 'center' },
  back: { color: '#EC4899', fontWeight: 'bold', marginRight: 20 },
  title: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  card: { backgroundColor: '#FFF', margin: 15, padding: 15, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 3 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  info: { fontSize: 12, color: '#888' },
  actions: { flexDirection: 'row' },
  btnApprove: { backgroundColor: '#10B981', padding: 10, borderRadius: 8, marginRight: 8 },
  btnReject: { backgroundColor: '#EF4444', padding: 10, borderRadius: 8 },
  btnText: { color: '#FFF', fontWeight: 'bold' }
});