import React, {useState, useEffect, Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import firebase from "firebase";
import UploadImage from "./FileUpload";

export default function EditProfile({navigation,route}) {
    //Navigation function for going to the login screen
    const navigateToLogin = ({navigation,route}) =>{
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
    const nowId = firebase.auth().currentUser.uid;

    //Creating a useState to be used when looking in the database
    const [users,setUser] = useState([]);

    //finding all users in the database
    useEffect(() => {
        if (users.length === 0 || !users){
            firebase
                .database()
                .ref(`/Users/`)
                .on('value', snapshot => {
                    setUser(snapshot.val())
                });
        }

    },[]);

    //alle data in Users collection
    const userObjects = Object.keys

    //Passing the users into an array
    const userArray = Object.values(users);

    //Finding the current id that the user is logged in with and filtering the array
    global.userObject = userArray.filter(obj=>{
        return obj.uuid===nowId
    });

    /*Gå ind i obj med entries, filterer arr hvis det ikke matcher login id, og gå et step ind */
    const filteredUserWhichMatchFireBaseID = Object.entries(users).filter(user => user[1].uuid === nowId)[0]

    const stringUserObject = JSON.stringify(userObject);
    //console.log(userObject);


    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');

    const updateProfile = () => {
        const id = filteredUserWhichMatchFireBaseID[0];

        try{

            firebase
                .database()
                .ref(`/Users/${id}`)
                // we use update so that it is only the fields we change that changes
                .update({ firstName, lastName, _image, bio })
                .then(
                    navigation.navigate('Profile')
                )

        } catch(error){
            console.log(error)
        }
    }

    const editButton = () => {
        return <Button onPress = {() => updateProfile()} title = "Edit Profile" />
    }




    return (
        <View style={styles.container}>

            <Text>Logged in as: {currentUser} </Text>
            <Text>Logged in as: {nowId} </Text>
            <Text>Edit your Profile: </Text>

            <TextInput
                placeholder="first name"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles.inputField}
            />

            <TextInput
                placeholder="last name"
                value={lastName}
                onChangeText={(lastName) => setLastName(lastName)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="Tell something about your self"
                value={bio}
                onChangeText={(bio) => setBio(bio)}
                style={styles.inputField}
            />
            <UploadImage/>

            {editButton()}
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
    input: {
        borderWidth: 1,
        padding:5,
        flex: 1
    },
});
