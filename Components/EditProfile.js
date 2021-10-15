import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";

export default function App() {
    //Function for getting current user ID so the information can be changed
    const seeCurrentUser = () => {

    }

    //Variable containing the currentUser
    const currentUser = (firebase.auth().currentUser.email)

    return (
        <View style={styles.container}>
            <Text>Editing profile: {currentUser} </Text>
            <Text>Edit your Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
});