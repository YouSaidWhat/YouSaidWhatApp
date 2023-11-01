import React from 'react';
import { GuessingCard } from '../Components/GuessingCard';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
  
const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    }
});
  

const HomeScreen = ({navigation}) => {
    return (
        <>
            <GuessingCard userName="John" quote="I'm a quote" options={["John", "Paul", "George", "Ringo"]} correctOption="John"/>
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => navigation.navigate('AddQuote')}
            />
        </>
    );
}

export default HomeScreen;