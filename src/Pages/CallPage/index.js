import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CallActionButtons from '../../Component/CallActionButtons';

const CallPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cameraPreview}></View>

            <CallActionButtons />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7a4769',
    },
    cameraPreview: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 80
    },
});

export default CallPage;