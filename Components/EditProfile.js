import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import firebase from "firebase";
//import UploadScreen from './src/screens/UploadScreen';

export default function App({navigation}) {
    //Function for getting current user ID so the information can be changed
    // Get current username
    //var user = firebase.auth().currentUser;


    //For inspiration to upload image https://www.instamobile.io/mobile-development/react-native-firebase-storage/


    //Navigation function for going to the login screen
    const navigateToLogin = () =>{
        navigation.navigate('Login')
    };

    //If it is not possible to access the wanted user
    if (!firebase.auth().currentUser) {
        //Button for going back to login page if user is not logged ind
        return (
            <View><Text>The user could not be found</Text>
                <Button onPress={()=>task} title="upload image"/>
                <Button onPress={()=>navigateToLogin()} title="Go to login page"/>
            </View>
        )
    }

    //Variable containing the currentUser
    const currentUser = (firebase.auth().currentUser.email);

    return (
        <View style={styles.container}>
            <Text>Logged in as: {currentUser} </Text>
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