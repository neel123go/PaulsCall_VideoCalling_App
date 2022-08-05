import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallingPage = () => {
    return (
        <View style={styles.page}>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>Calling</Text>
                <Text style={styles.phoneNumber}>Ringing +8801731832319</Text>
            </View>

            <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <Ionicons name="camera-reverse" size={40} color="white" />
                </View>
                <View style={styles.icon}>
                    <MaterialIcons name="camera-off" size={40} color="white" />
                </View>
                <View style={styles.icon}>
                    <MaterialIcons name="microphone-off" size={40} color="white" />
                </View>
                <View style={[styles.icon, { backgroundColor: '#d6281c' }]}>
                    <MaterialIcons name="phone-hangup" size={40} color="white" />
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#7a4769',
    },
    cameraPreview: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 80
    },
    name: {
        color: 'white',
        fontSize: 35,
        fontWeight: '600',
    },
    phoneNumber: {
        fontSize: 20,
        color: '#fff',
        marginTop: 10,
    },
    iconContainer: {
        backgroundColor: '#1f1e1e',
        paddingVertical: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    icon: {
        backgroundColor: '#2b2b2b',
        borderRadius: 50,
        padding: 15,
    }
});

export default CallingPage;