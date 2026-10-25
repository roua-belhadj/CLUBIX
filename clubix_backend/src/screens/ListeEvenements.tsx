import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const DATA_AVENIR = [
    { id: '1', titre: 'Formation React Native', date: '12 Avril 2026', salle: 'Salle TP 05', prof: 'Mme. Ben Amor', icone: '📱' },
    { id: '2', titre: 'Atelier Design UI/UX', date: '18 Avril 2026', salle: 'Amphi 2', prof: 'Mr. Trabelsi', icone: '🎨' },
];

const DATA_ARCHIVES = [
    { id: '101', titre: 'Hackathon Codage', participants: 45, theme: 'Frontend/Backend', image: '💻' },
    { id: '102', titre: 'Robotique Challenge', participants: 30, theme: 'Arduino & IOT', image: '🤖' },
    { id: '103', titre: 'Workshop DevOps', participants: 25, theme: 'Cloud & Radio', image: '☁️' },
];

export default function ListeEvenements({ onBack }) {
    const [tab, setTab] = useState('avenir');

    const renderAvenir = ({ item }) => (
    <View style={styles.card}>
        <Text style={styles.cardIcon}>{item.icone}</Text>
        <View style={{flex:1}}>
        <Text style={styles.cardTitle}>{item.titre}</Text>
        <Text style={styles.cardInfo}>📅 {item.date} | 📍 {item.salle}</Text>
        <Text style={styles.cardInfo}>👨‍🏫 Prof : {item.prof}</Text>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Participer</Text></TouchableOpacity>
        </View>
    </View>
    );

    const renderArchive = ({ item }) => (
    <View style={[styles.card, {borderLeftColor: '#4CAF50', borderLeftWidth: 5}]}>
        <Text style={styles.cardIcon}>{item.image}</Text>
        <View style={{flex:1}}>
        <Text style={styles.cardTitle}>{item.titre}</Text>
        <Text style={[styles.cardInfo, {color: '#6200ee', fontWeight: 'bold'}]}>#{item.theme}</Text>
        <Text style={styles.cardInfo}>👥 {item.participants} Étudiants présents</Text>
        </View>
    </View>
    );

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onBack} style={styles.back}><Text style={styles.backText}>⬅ Retour</Text></TouchableOpacity>

        <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tab, tab==='avenir' && styles.activeTab]} onPress={()=>setTab('avenir')}>
            <Text style={tab==='avenir' ? styles.activeTabText : styles.tabText}>À VENIR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, tab==='archives' && styles.activeTab]} onPress={()=>setTab('archives')}>
            <Text style={tab==='archives' ? styles.activeTabText : styles.tabText}>ARCHIVES</Text>
        </TouchableOpacity>
        </View>

        <FlatList 
        data={tab === 'avenir' ? DATA_AVENIR : DATA_ARCHIVES}
        renderItem={tab === 'avenir' ? renderAvenir : renderArchive}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 20}}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    back: { padding: 20 },
    backText: { color: '#6200ee', fontWeight: 'bold' },
    tabBar: { flexDirection: 'row', marginHorizontal: 20, backgroundColor: '#eee', borderRadius: 12, padding: 4 },
    tab: { flex: 1, padding: 12, alignItems: 'center', borderRadius: 10 },
    activeTab: { backgroundColor: '#fff', elevation: 2 },
    activeTabText: { color: '#6200ee', fontWeight: 'bold' },
    tabText: { color: '#888' },
    card: { backgroundColor: '#fff', borderRadius: 15, padding: 15, marginBottom: 15, flexDirection: 'row', elevation: 2 },
    cardIcon: { fontSize: 35, marginRight: 15 },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    cardInfo: { fontSize: 13, color: '#666', marginTop: 4 },
    btn: { backgroundColor: '#6200ee', padding: 8, borderRadius: 6, marginTop: 10, width: 90, alignItems: 'center' },
    btnText: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
});