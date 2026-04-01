import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

// --- IMPORTS DES ÉCRANS UTILISATEURS ---
import Welcome from './src/screens/Welcome';
import InfosClub from './src/screens/InfosClub';
import FormulaireAdhesion from './src/screens/FormulaireAdhesion';
import ListeEvenements from './src/screens/ListeEvenements';

// --- IMPORTS ESPACE ADMIN ---
import AdminDashboard from './src/admin/screens/AdminDashboard';
import AdminLogin from './src/admin/screens/AdminLogin';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Welcome');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Welcome':
        return <Welcome onNext={() => setCurrentScreen('Dashboard')} />;
      
      case 'Dashboard':
        return (
          <View style={styles.dashboard}>
            <StatusBar backgroundColor="#F8F9FA" barStyle="dark-content" />
            <Text style={styles.dashTitle}>CLUBIX PORTAL</Text>
            <Text style={styles.dashSubtitle}>Select your profile to continue</Text>
            
            {/* 1. VISITEUR */}
            <TouchableOpacity style={styles.card} onPress={() => setCurrentScreen('Visiteur')}>
              <Text style={styles.icon}>✨</Text>
              <View>
                <Text style={styles.cardTitle}>Newcomer</Text>
                <Text style={styles.cardDesc}>Discover & Join us</Text>
              </View>
            </TouchableOpacity>

            {/* 2. MEMBRE (Désormais accessible) */}
            <TouchableOpacity 
              style={[styles.card, { borderLeftColor: '#6A3FB6' }]} 
              onPress={() => setCurrentScreen('MembrePortal')}
            >
              <Text style={styles.icon}>🚀</Text>
              <View>
                <Text style={styles.cardTitle}>Member</Text>
                <Text style={styles.cardDesc}>Access your personal space</Text>
              </View>
            </TouchableOpacity>

            {/* 3. ADMIN (Avec sécurité par code) */}
            <TouchableOpacity 
              style={[styles.card, { borderLeftColor: '#10B981' }]} 
              onPress={() => setCurrentScreen('Admin')}
            >
              <Text style={styles.icon}>🛡️</Text>
              <View>
                <Text style={styles.cardTitle}>Admin</Text>
                <Text style={styles.cardDesc}>Management & Control</Text>
              </View>
            </TouchableOpacity>
            
            <Text style={styles.footer}>© 2026 CLUBIX COMMUNITY</Text>
          </View>
        );

      case 'MembrePortal':
        return (
          <View style={styles.centerContainer}>
            <Text style={styles.placeholderText}>Member Portal 🚀</Text>
            <Text style={{color: '#888', marginBottom: 20}}>Interface under construction...</Text>
            <TouchableOpacity onPress={() => setCurrentScreen('Dashboard')}>
              <Text style={styles.backLink}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        );

      case 'Admin':
        if (!isAdminAuthenticated) {
          return (
            <AdminLogin 
              onLoginSuccess={() => setIsAdminAuthenticated(true)} 
              onBack={() => setCurrentScreen('Dashboard')} 
            />
          );
        }
        return (
          <AdminDashboard 
            onBack={() => {
              setIsAdminAuthenticated(false);
              setCurrentScreen('Dashboard');
            }} 
          />
        );

      case 'Visiteur':
        return <InfosClub 
          onJoin={() => setCurrentScreen('Formulaire')} 
          onEvents={() => setCurrentScreen('Evenements')} 
          onBack={() => setCurrentScreen('Dashboard')} 
        />;

      case 'Formulaire': return <FormulaireAdhesion onBack={() => setCurrentScreen('Visiteur')} />;
      case 'Evenements': return <ListeEvenements onBack={() => setCurrentScreen('Visiteur')} />;
      default: return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dashboard: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#F8F9FA' },
  dashTitle: { fontSize: 32, fontWeight: '900', color: '#1A1A1A', textAlign: 'center' },
  dashSubtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 40 },
  card: { 
    backgroundColor: '#fff', padding: 22, borderRadius: 15, marginBottom: 20, 
    flexDirection: 'row', alignItems: 'center', elevation: 5,
    borderLeftWidth: 6, borderLeftColor: '#EC4899' 
  },
  icon: { fontSize: 35, marginRight: 20 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  cardDesc: { fontSize: 14, color: '#888' },
  footer: { textAlign: 'center', color: '#BBB', marginTop: 20 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  backLink: { color: '#6A3FB6', fontWeight: 'bold' }
});