import { Link } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { TextInput, Button, Modal, Portal } from 'react-native-paper';
import * as Contacts from 'expo-contacts';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ContactSelectionPane from './ContactSelectionPane';



export const NewQuote = () => {
    const [speaker, setSpeaker] = React.useState('');
    const [quote, setQuote] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const [isPaneVisible, setIsPaneVisible] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
        setIsPaneVisible(false);
    };

    useEffect(() => {
        if (selectedContact) {
            setSpeaker(selectedContact.name);
            setPhoneNumber(selectedContact.phoneNumbers[0].number);
        }
    }, [selectedContact]);

    return (
        <>
            <TextInput
                label="Speaker"
                value={speaker}
                mode='outlined'
                onChangeText={text => {setSpeaker(text)}}
            />
            <Button mode="outlined" onPress={() => setIsPaneVisible(true)}>Import from contacts</Button>
            <Portal>
            <Modal
                visible={isPaneVisible}
                onDismiss={() => {
                setIsPaneVisible(!isPaneVisible);
                }}
                contentContainerStyle={{ backgroundColor: 'white', padding: 20, margin: 20 }}
            >
                <ContactSelectionPane onSelect={handleContactSelect} />
            </Modal>
            </Portal>
            <TextInput
                label="Phone Number"
                value={phoneNumber}
                mode='outlined'
                onChangeText={text => {setSpeaker(text)}}
            />
            <TextInput
                label="Quote"
                value={quote}
                onChangeText={text => {setQuote(text)}}
                mode='outlined'
            />
            <TextInput
                label="Location"
                value={quote}
                onChangeText={text => {setQuote(text)}}
                mode='outlined'
            />
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Submit
            </Button>
        </>
    );
};