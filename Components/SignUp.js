import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import React, {useState, useEffect} from 'react';
import firebase from "firebase";



function SignUp() {
    //Creating variables for the Sign up form
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCompleted, setCompleted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    //Submitting to firebase using a function
    const submitToFirebase = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email,password).then((data)=>{});
        } catch (error){
            console.log(error)
        }
    }

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