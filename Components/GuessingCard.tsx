import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="account" />

const styles = StyleSheet.create({
    card: {
        margin: 10
    },
    content: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    actions: {
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'black',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 5,
    },
    button: {
        flex: 1,
        margin: 5
    }
});

export interface GuessingCardProps {
    userName: string;
    quote: string;
    options: string[];
    correctOption: string;
};

export const GuessingCard = (props: GuessingCardProps) => 
    <Card style={styles.card}>
        <Card.Title title={props.userName + " overheard"} left={LeftContent}/>
        <Card.Content style={styles.content}>
            <Text variant="bodyLarge">"{props.quote}"</Text>
            <Text> </Text>  
            <Text variant="bodySmall">- who said it?</Text>

        </Card.Content>
        <Card.Actions style={styles.actions}>
            <View style={styles.buttonRow}>
                <Button style={styles.button}>{props.options[0]}</Button>
                <Button style={styles.button}>{props.options[1]}</Button>
            </View>
            <View style={styles.buttonRow}>
                <Button style={styles.button}>{props.options[2]}</Button>
                <Button style={styles.button}>{props.options[3]}</Button>
            </View>
        </Card.Actions>
    </Card>