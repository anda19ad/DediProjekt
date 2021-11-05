import React from 'react';
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


  const logOut = async()=>{
        await firebase.auth().signOut()
    };



const Profile = ({navigation}) => {
  const {
    firstName,
    _image,
    lastName,
    bio,
  } = userObject[0];

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
            <TouchableOpacity>
            <Button onPress={() => logOut()} title="Log out" />
              <Text style={styles.topIconLeft}>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Button onPress={() => navEdit()} title="Edit Profile" />
              <Text style={styles.topIconRight}>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          name={firstName +" " + lastName}
          info1={bio}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Icon name="optionsH" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.iconButton}>
              <Icon name="chat" />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;