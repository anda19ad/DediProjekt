import {Button, Text, View, TextInput, ActivityIndicator, StyleSheet,} from "react-native";
import React, { useState} from 'react';
import firebase from "firebase";


function LogIn() {

    //Creating variables for the Sign up form. The same variables as in SignUp
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCompleted, setCompleted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    //Using predefined method from firebase in a function
    const logInFunction = async()=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password).then((data)=>{})
        }catch(error){
            console.log(error)
        }
    }

    //creating a button for login
    const logInButton =()=>{
        return <Button onPress={()=>logInFunction()} title={"Login"}/>
    }

    return (
        <View>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {logInButton()}
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

export default LogIn