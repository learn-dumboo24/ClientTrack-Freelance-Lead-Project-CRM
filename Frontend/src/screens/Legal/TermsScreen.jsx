import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TermsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#2A3266" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Terms of Service</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.sectionTitle}>1. Introduction</Text>
                <Text style={styles.text}>
                    Welcome to ClientTrack. By accessing or using our mobile application, you agree to be bound by these Terms of Service.
                </Text>

                <Text style={styles.sectionTitle}>2. Use of Service</Text>
                <Text style={styles.text}>
                    You agree to use the application only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.
                </Text>

                <Text style={styles.sectionTitle}>3. User Content</Text>
                <Text style={styles.text}>
                    You retain ownership of any content you submit to the application. However, you grant us a license to use, store, and display your content as necessary to provide the service.
                </Text>

                <Text style={styles.sectionTitle}>4. Termination</Text>
                <Text style={styles.text}>
                    We reserve the right to terminate or suspend your access to the application at any time, without notice, for any reason, including violation of these Terms.
                </Text>

                <Text style={styles.sectionTitle}>5. Changes to Terms</Text>
                <Text style={styles.text}>
                    We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page.
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Last Updated: November 2025</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDF5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2A3266',
    },
    content: {
        padding: 24,
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#5B6ABF',
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        color: '#555555',
        lineHeight: 24,
        marginBottom: 10,
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    footerText: {
        color: '#999',
        fontSize: 12,
        fontStyle: 'italic',
    }
});
