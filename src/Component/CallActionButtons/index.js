import { View, StyleSheet, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallActionButtons = () => {

    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);

    const onReverseCamera = () => {
        Alert.alert("Selfie Camera", "You reverse your camera");
    }
    const onToggleCamera = () => {
        setIsCameraOn(currentValue => !currentValue);
    }
    const onToggleMicrophone = () => {
        setIsMicOn(currentValue => !currentValue);
    }
    const onHangup = () => {
        Alert.alert("Call End", "You end the call");
    }

    return (
        <View style={styles.iconContainer}>
            <Pressable onPress={onReverseCamera} style={styles.icon}>
                <Ionicons name="camera-reverse" size={40} color="white" />
            </Pressable>
            <Pressable onPress={onToggleCamera} style={styles.icon}>
                <MaterialIcons name={isCameraOn ? "camera-off" : "camera"} size={40} color="white" />
            </Pressable>
            <Pressable onPress={onToggleMicrophone} style={styles.icon}>
                <MaterialIcons name={isMicOn ? "microphone-off" : "microphone"} size={40} color="white" />
            </Pressable>
            <Pressable onPress={onHangup} style={[styles.icon, { backgroundColor: '#d6281c' }]}>
                <MaterialIcons name="phone-hangup" size={40} color="white" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#1f1e1e',
        paddingVertical: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 'auto',
    },
    icon: {
        backgroundColor: '#2b2b2b',
        borderRadius: 50,
        padding: 15,
    }
});

export default CallActionButtons;