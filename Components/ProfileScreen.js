import {StyleSheet, Text, View, Button} from "react-native";
import React from "react";
import firebase from "firebase";

//Importing users from the Interest component
import InterestList from "./Interest";
import EditProfile from "./EditProfile";
import BeforeLogin from "./BeforeLogin";
import LogIn from "./LogIn";



function ProfileScreen({navigation}) {
//console.log(firebase.auth().currentUser.email)

    //Creating a function to handle log out. Predefined method by firebase
    const logOut = async()=>{
        await firebase.auth().signOut()
    };

    //Function that navigates the user to EditProfile page
    const editProfile = () => {
        // We navigate to EditProfile Screen
        navigation.navigate('Edit Profile');
    };

    const navigateToLogin = () =>{
        navigation.navigate('Login')
    };

    //Looping through the users from the real time database.

    //If it is not possible to access the wanted user
    if (!firebase.auth().currentUser) {
        //Button for going back to login page if user is not logged ind
        return (
            <View><Text>The user could not be found</Text>
                <Button onPress={()=>navigateToLogin()} title="Go to login page"/>
            </View>
            )
    }

    return (
            <View style={styles.container}>
                {/* Using firebase method to get email from the signed in user. Using the logOut function to log out with a button*/}
                <Text>Logged in as: {(firebase.auth().currentUser.email)}</Text>
                <Button onPress={()=>logOut()} title = "Log Out"/>
                <Button onPress={() => editProfile()} title="Edit your Profile"/>
                <InterestList/>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
});

export default ProfileScreen;