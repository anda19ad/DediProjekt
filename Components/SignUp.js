import {StyleSheet, Text, View, Button, TextInput, Alert} from "react-native";
import React, {useState, useEffect} from 'react';
import firebase from "firebase";



function SignUp() {
    //Creating variables for the Sign up form
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName,setFirstName] = useState('Inkog');
    const [lastName, setLastName] = useState('nito');
    const [bio, setBio] = useState('Bla bla bla bla bla bla bla bla bla');
    const [_image,setImage] = useState('');
    const [isCompleted, setCompleted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    //Submitting to firebase using a function
    const submitToFirebase = async () => {
        try {

            //Creating a user for authentication and also an object with the unique user id as a property. object when creating an auth user
            firebase
                .auth()
                .createUserWithEmailAndPassword(email,password)
                .then((res)=>{
                    firebase.database()
                        .ref('/Users/')
                        .push({
                        uuid: firebase.auth().currentUser.uid,
                        email,
                        password,
                        firstName,
                        lastName,
                        _image,
                        bio,
                        })
                })
             //This function works but is not enough
            /*
            firebase
                .database()
                .ref('/Users/')
                .push({ email,password}).then(data => {
                 firebase.auth().createUserWithEmailAndPassword(email,password).then((data)=>{});
            })
            */

           // await firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{});

        } catch (error){
            console.log(error)
        }
    };

    //Creating submitbutton for later usage
    const submitButton = () => {
        return <Button onPress = {() => submitToFirebase()} title = "Sign up!" />
    }


    //Using the functions in a visual way
    return (
        <View>
            {/*Header for Sign up page*/}
            <Text style = {styles.header}>Sign Up</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {submitButton()}
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 40,
    },
});

export default SignUp