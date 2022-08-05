import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import contacts from '../../../assets/data/contacts.json';

const ContactsPage = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    useEffect(() => {
        const newContact = contacts.filter(contact => contact.user_display_name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredContacts(newContact);
    }, [searchText]);

    return (
        <View style={styles.page}>
            <TextInput value={searchText} onChangeText={setSearchText} style={styles.searchInput} placeholder='Search' />
            <FlatList
                data={filteredContacts}
                renderItem={({ item }) => <Text style={styles.contactName}>{item.user_display_name}</Text>}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        paddingTop: 60,
        paddingHorizontal: 20
    },
    contactName: {
        fontSize: 18,
        paddingVertical: 10,
        color: '#404040'
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#edebeb',
    },
    searchInput: {
        backgroundColor: '#edebeb',
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
        fontWeight: '500',
        color: '#616060'
    }
});

export default ContactsPage;