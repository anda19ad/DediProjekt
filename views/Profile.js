import React, {useState, useEffect, Component} from 'react';
import styles from '../assets/style';
import firebase from 'firebase';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button
} from 'react-native';
import ProfileItem from '../Components/ProfileItem';
import Icon from '../Components/Icon';
import Demo from '../assets/data/demo.js';


const Profile = ({navigation}) => {

  const logOut = async()=>{
    await firebase.auth().signOut()
  };

//Getting an user object from a global variable in EditProfile.js
  const {
    firstName,
    _image,
    lastName,
    bio,
  } = userObject[0];

  //For test purposes a hardcoded demo profile can be used instead of the firebasedatabase
  /*const {
    firstName,
    _image,
    lastName,
    bio,
  } = Demo[9];*/

  const navEdit = ()=>{
    navigation.navigate('Edit Profile');
  };

  return (
    <ImageBackground
        source={_image}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={"./views/bg.png"} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity style={styles.circledButton} onPress={() => logOut()} title="Log out">
              <Text style={styles.iconButton}>
                <Ionicons name="log-out" size={20}/>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          name={firstName +" " + lastName}
          info1={bio}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton} onPress={() => navEdit()} title="Edit Profile">
            <Text style={styles.iconButton}>
              <Ionicons name="create-outline" size={20}/>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.iconButton}>
              <Ionicons name="chatbubbles" size={20}/>
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;