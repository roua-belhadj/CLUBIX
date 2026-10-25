import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image, StatusBar } from 'react-native';

const THEME_PURPLE = '#6A3FB6';

export default function Welcome({ onNext }) {
    const scaleLogoAnim = useRef(new Animated.Value(1)).current;
    const scaleButtonAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
    Animated.loop(
        Animated.sequence([
        Animated.timing(scaleLogoAnim, { toValue: 1.05, duration: 2500, useNativeDriver: true }),
        Animated.timing(scaleLogoAnim, { toValue: 1, duration: 2500, useNativeDriver: true }),
        ])
    ).start();

    Animated.loop(
        Animated.sequence([
        Animated.timing(scaleButtonAnim, { toValue: 1.06, duration: 1000, useNativeDriver: true }),
        Animated.timing(scaleButtonAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
        ])
    ).start();
    }, []);

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor={THEME_PURPLE} barStyle="light-content" />
        <View style={styles.content}>
        <Animated.View style={[styles.logoWrapper, { transform: [{ scale: scaleLogoAnim }] }]}>
            <Image source={require('../../assets/images/logo_clubix.png')} style={styles.logoImage} />
        </Animated.View>

        <Text style={styles.brandName}>CLUBIX</Text>
        <Text style={styles.mainSlogan}>CONNECT . CREATE . BELONG</Text>
        <View style={styles.divider} />
        <Text style={styles.subText}>Build your story with us</Text>
        <Text style={styles.waitingText}>What are you waiting for?</Text>

        <Animated.View style={{ transform: [{ scale: scaleButtonAnim }] }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.mainButton} onPress={onNext}>
            <Text style={styles.buttonText}>JOIN US 🚀</Text>
            </TouchableOpacity>
        </Animated.View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: THEME_PURPLE, justifyContent: 'center' },
    content: { alignItems: 'center', padding: 20 },
    logoWrapper: { 
    width: 180, height: 180, borderRadius: 90, 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    justifyContent: 'center', alignItems: 'center', marginBottom: 15 
    },
    logoImage: { width: 130, height: 130, resizeMode: 'contain' },
    brandName: { fontSize: 48, fontWeight: '900', color: '#FFF', letterSpacing: 5, marginBottom: 5 },
    mainSlogan: { fontSize: 16, fontWeight: 'bold', color: '#E9D5FF', letterSpacing: 2, marginBottom: 20 },
    divider: { width: 40, height: 3, backgroundColor: '#EC4899', marginBottom: 20 },
    subText: { fontSize: 20, color: '#FFF', fontWeight: '600', marginBottom: 8 },
    waitingText: { fontSize: 15, color: '#D8B4FE', fontStyle: 'italic', marginBottom: 45 },
    mainButton: { backgroundColor: '#FFF', paddingVertical: 18, paddingHorizontal: 60, borderRadius: 50 },
    buttonText: { color: THEME_PURPLE, fontWeight: 'bold', fontSize: 18 }
});