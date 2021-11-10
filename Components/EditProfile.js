import React, {useState, useEffect, Component} from 'react';
import {Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
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


    //Passing the users into an array
    const userArray = Object.values(users);

    //Finding the current id that the user is logged in with and filtering the array
    global.userObject = userArray.filter(obj=>{
        return obj.uuid===nowId
    });

    /*Function created with help from Eigil. Going to the objective with entries, filtering the array and matching with auth id*/
    const filteredUserWhichMatchFireBaseID = Object.entries(users).filter(user => user[1].uuid === nowId)[0]

    //Not in use at the moment but good to keep in hand. Stingifyes the user Object
    const stringUserObject = JSON.stringify(userObject);
    //console.log(userObject);

    //Use state consts used in the update of the profile
    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');

    const updateProfile = () => {
        //Using id for reference to firebase
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

    //After styling this button is not in use anymore but is saved for the moment
    const editButton = () => {
        return <Button onPress = {() => updateProfile()} title = "Edit Profile" />
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <UploadImage style={styles.avatar}/>
                    <TextInput
                        placeholder="first name"
                        value={firstName}
                        onChangeText={(firstName) => setFirstName(firstName)}
                        style={styles.name}
                    />
                    <TextInput
                        placeholder="last name"
                        value={lastName}
                        onChangeText={(lastName) => setLastName(lastName)}
                        style={styles.name}
                    />
                    <Text style={styles.userInfo}>{currentUser} </Text>
                    <TextInput
                        placeholder="Tell something about your self"
                        value={bio}
                        onChangeText={(bio) => setBio(bio)}
                        style={styles.userInfo}
                    />
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>updateProfile()}>
                        <Text>Update your profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.info}>Settings</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.info}>News</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.info}>Shop</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}

//Style inspiration from https://www.bootdey.com/react-native-snippet/12/User-profile-with-options and https://www.bootdey.com/react-native-snippet/23/Profile-ui-example
const styles = StyleSheet.create({
    header:{
        backgroundColor: "#DCDCDC",
    },
    headerContent:{
        padding:30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
    },
    name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
    },
    userInfo:{
        fontSize:16,
        color:"#778899",
        fontWeight:'600',
    },
    body:{
        backgroundColor: "#778899",
        height:500,
        alignItems:'center',
    },
    item:{
        flexDirection : 'row',
    },
    infoContent:{
        flex:1,
        alignItems:'flex-start',
        paddingLeft:5
    },
    iconContent:{
        flex:1,
        alignItems:'flex-end',
        paddingRight:5,
    },
    icon:{
        width:30,
        height:30,
        marginTop:20,
    },
    info:{
        fontSize:18,
        marginTop:20,
        color: "#FFFFFF",
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#913831",
    },
});


/*
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
*/