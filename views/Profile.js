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
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  return (
    <ImageBackground
        source={userObject[0]._image}

      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={userObject[0]._image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
            <Button onPress={() => logOut()} title="Log out" />
              <Text style={styles.topIconLeft}>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topIconRight}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
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