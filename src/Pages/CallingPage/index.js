import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import CallActionButtons from '../../Component/CallActionButtons';

const CallingPage = () => {
    return (
        <View style={styles.page}>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>Calling</Text>
                <Text style={styles.phoneNumber}>Ringing +8801731832319</Text>
            </View>

            <CallActionButtons />
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
});

export default CallingPage;