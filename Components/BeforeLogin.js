
//Used in early development but not anymore
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from "./SignUp";
import LogIn from "./LogIn";


function BeforeLogin(){
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}> Log in to your account or sign up </Text>
            <LogIn/>
            <SignUp/>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: 'transparent',
        padding: 20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        fontSize: 40,
    },
});

export default BeforeLogin;