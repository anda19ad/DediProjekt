import React from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import firebase from "firebase";
//import UploadScreen from './src/screens/UploadScreen';

export default function EditProfile({navigation,route}) {
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
                <Button onPress={()=>navigateToLogin()} title="Go to login page"/>
            </View>
        )
    }

    //Const containing the currentUser
    const currentUser = (firebase.auth().currentUser.email);

    //Const containing the current users unique user id. A fail is here
    const currentId = firebase.auth().currentUser.uid;


    //Creating const for attaching the name to the database
    const editProfile = route.name === "Add or edit profileInfo";

    //function that should be activated with a button for uploading data to database
    const submitToObject = async ()=>{


        try{
            const Id = route.params.Users[0];
            firebase
                .database()
                .ref(`/Users/${Id}`)
                .update(firstName,lastName)
            navigation.navigate('Profile Screen')
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Logged in as: {currentUser} </Text>
            <Text>Logged in as: {currentId} </Text>
            <Text>Edit your Profile</Text>
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="email"
                value={lastName}
                onChangeText={(lastName) => setLastName(email)}
                style={styles.inputField}
            />
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