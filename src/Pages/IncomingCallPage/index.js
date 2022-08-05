import { ImageBackground, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import Bg from '../../../assets/images/ios_bg.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IncomingCallPage = () => {

    const onDecline = () => {
        Alert.alert("Decline", "You end the call");
    };

    const onAccept = () => {
        Alert.alert("Accept", "You accept the call");
    }

    return (
        <ImageBackground source={Bg} style={styles.bg} resizeMode="cover">
            <Text style={styles.name}>Alex</Text>
            <Text style={styles.phoneNumber}>Ringing +8801731832319</Text>

            <View style={[styles.row, { marginTop: 'auto' }]}>
                <View style={styles.iconContainer}>
                    <Ionicons name="alarm" size={35} color="white" />
                    <Text style={styles.buttonText}>Remind Me</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Entypo name="message" size={35} color="white" />
                    <Text style={styles.buttonText}>Message</Text>
                </View>
            </View>

            <View style={styles.row}>
                <Pressable onPress={onDecline} style={styles.iconContainer}>
                    <View style={styles.buttonContainer}>
                        <Feather name="x" size={42} color="white" />
                    </View>
                    <Text style={styles.buttonText}>Decline</Text>
                </Pressable>
                <Pressable onPress={onAccept} style={styles.iconContainer}>
                    <View style={[styles.buttonContainer, { backgroundColor: '#1e57c9' }]}>
                        <AntDesign name="check" size={42} color="white" />
                    </View>
                    <Text style={styles.buttonText}>Accept</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: 35,
        fontWeight: '600',
        paddingTop: 100,
    },
    phoneNumber: {
        fontSize: 20,
        color: '#fff',
        marginTop: 10,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 60
    },
    iconContainer: {
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    buttonContainer: {
        padding: 18,
        backgroundColor: '#d6281c',
        borderRadius: 50
    },
});

export default IncomingCallPage;