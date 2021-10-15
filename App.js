import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";


//Importing compononents
//import InterestList from "./Components/Interest";
import ProfileScreen from "./Components/ProfileScreen";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import BeforeLogin from "./Components/BeforeLogin";
import EditProfile from "./Components/EditProfile";
import InterestList from "./Components/Interest";

//For navigation
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const firebaseConfig = {
  apiKey: "AIzaSyDSKxwkpeMy0P0weYhKF0Y1rj4Bhs0Pzn8",
  authDomain: "dediw-80193.firebaseapp.com",
  projectId: "dediw-80193",
  storageBucket: "dediw-80193.appspot.com",
  messagingSenderId: "715759865884",
  appId: "1:715759865884:web:db0e657b9b5d3b067f8fd9",
  measurementId: "G-61NCHYYLNG"
};



function App() {

    //Initializing Firebase and making sure that only one firebase is initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

    //Creating users as a variable
    const [user, setUser] = useState({loggedIn: false})

    //Checking if the user is logged in. Predefined method by firebase
    function authStatus(callback) {
        return firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback({loggedIn: true, user: user});
            } else {
                callback({loggedIn: false});
            }
        });
    }

    //Activating a listener to check the users auth status
    useEffect(() => {
        const unsubscribe = authStatus(setUser);
        return () => {
            unsubscribe();
        };
    }, []);

    //if the user is not logged in return to BeforeLogin
    if (user.loggedIn){
        return <ProfileScreen/>
    }
    //return user.loggedIn ? <ProfileScreen /> : <BeforeLogin/> ;

    const Stack = createStackNavigator ();
    const Tab = createBottomTabNavigator();


    const stackNav = ()=> {
        return(
            <Stack.Navigator>
                <Stack.Screen name={'Login'} component={LogIn}/>
                <Stack.Screen name={'Sign Up'} component={SignUp}/>
                <Stack.Screen name={'Edit Profile'} component={EditProfile}/>
                <Stack.Screen name={'Profile Screen'} component={ProfileScreen}/>
            </Stack.Navigator>
        )
    };

  return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName = "Settings">
              <Tab.Screen name={'Login'} component={LogIn} options={{tabBarIcon: () => ( <Ionicons name="log-in-outline" size={20} />),headerShown:null}}/>
              <Tab.Screen name={'Sign Up'} component={SignUp} options={{tabBarIcon: () => ( <Ionicons name="add" size={20} />),headerShown:null}}/>
              <Tab.Screen name={'Edit Profile'} component={EditProfile} options={{tabBarIcon: () => ( <Ionicons name="home-outline" size={20} />),headerShown:null}}/>
              <Tab.Screen name={'Profile Screen'} component={ProfileScreen} options={{tabBarIcon: () => ( <Ionicons name="home-outline" size={20} />),headerShown:null}}/>
              <Tab.Screen name={'Settings'} component={stackNav} options={{tabBarIcon: () => ( <Ionicons name="settings-outline" size={20} />),headerShown:null}}/>
          </Tab.Navigator>
      </NavigationContainer>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;