import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacyPolicyScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#2A3266" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Privacy Policy</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.sectionTitle}>1. Information We Collect</Text>
                <Text style={styles.text}>
                    We collect information you provide directly to us, such as when you create an account, update your profile, or use our services. This may include your name, email address, and project details.
                </Text>

                <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
                <Text style={styles.text}>
                    We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.
                </Text>

                <Text style={styles.sectionTitle}>3. Information Sharing</Text>
                <Text style={styles.text}>
                    We do not share your personal information with third parties except as described in this policy or with your consent.
                </Text>

                <Text style={styles.sectionTitle}>4. Data Security</Text>
                <Text style={styles.text}>
                    We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                </Text>

                <Text style={styles.sectionTitle}>5. Contact Us</Text>
                <Text style={styles.text}>
                    If you have any questions about this Privacy Policy, please contact us at support@clienttrack.com.
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
