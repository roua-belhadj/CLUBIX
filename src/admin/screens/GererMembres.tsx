import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';

const MEMBERS_DATA = [
  { id: '1', name: 'Ahmed Rahmani', role: 'Président du Club', joined: '15/09/2025' },
  { id: '2', name: 'Leila Trabelsi', role: 'Vice-Président(e)', joined: '16/09/2025' },
  { id: '3', name: 'Sami Ben Ali', role: 'Secrétaire général(e)', joined: '20/09/2025' },
  { id: '4', name: 'Rania Kassab', role: 'Ressources Humaines', joined: '05/10/2025' },
  { id: '5', name: 'Yassine Dridi', role: 'Trésorier(ère)', joined: '10/10/2025' },
];

export default function GererMembres({ onBack }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1A1A1A" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>Club Directory</Text>
      </View>

      <FlatList
        data={MEMBERS_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 15 }}
        renderItem={({ item }) => (
          <View style={styles.memberCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.memberName}>{item.name}</Text>
              <Text style={styles.memberRole}>{item.role}</Text>
              <Text style={styles.memberDate}>Joined: {item.joined}</Text>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={{fontSize: 18}}>⚙️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#1A1A1A', flexDirection: 'row', alignItems: 'center' },
  back: { color: '#6A3FB6', fontWeight: 'bold', marginRight: 20 },
  title: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  memberCard: { 
    backgroundColor: '#FFF', padding: 15, borderRadius: 12, marginBottom: 12, 
    flexDirection: 'row', alignItems: 'center', elevation: 2 
  },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#6A3FB6', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  info: { flex: 1, marginLeft: 15 },
  memberName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  memberRole: { fontSize: 13, color: '#6A3FB6', fontWeight: '600', marginTop: 2 },
  memberDate: { fontSize: 11, color: '#999', marginTop: 2 },
  editBtn: { padding: 10 }
});