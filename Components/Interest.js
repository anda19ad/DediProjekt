import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from 'react';
import firebase from "firebase";

 function InterestList({navigate}) {

     //Getting a list of all users
     const [users,setUser] = useState([]);
     useEffect(() => {
         if (users.length === 0 || !users){
             firebase
                 .database()
                 .ref('/Users')
                 .on('value', snapshot => {
                     setUser(snapshot.val())
                 });
         }

     },[]);

     if(users.length === 0 || !users){
         return <Text>Loading matches...</Text>
     }

     const handleSelectUser = id =>{
         const user = Object.entries(users).find( user => user[0] === id /*id*/)
         navigation.navigate('Login', { user });
     };

     //onPress={() => handleSelectUser(userKeys[index])}

     const userArray = Object.values(users);
     const userKeys = Object.keys(users);

     return (
         <FlatList
             data = {userArray}
             keyExtractor = {(item, index) => userKeys[index]}
             renderItem = {({item,index}) => {
                 return(
                     <TouchableOpacity style={styles.container} >
                         <Text>
                             {item.email} {item.password}
                         </Text>
                     </TouchableOpacity>
                 )
             }}
         />
     )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    header: {
        fontSize: 40,
    },
});

export default InterestList