import {View, Text, ScrollView, StyleSheet} from "react-native";
import React, {useState, useEffect} from 'react';
import firebase from "firebase";

 function InterestList() {

     const [people,setPeople] = useState([]);

     //Getting all users inspired by: https://stackoverflow.com/questions/65409363/how-to-render-user-list-in-react-firebase
     //Currently not working 13-10-2021
     function printUsers() {
         var users = firebase.database().ref('/users');
         console.log(users)
         users.on('value', (snapshot) => {
             snapshot.forEach((snap) => {
                 const userObject = snap.val();
                 console.log("Andreas")
                 console.log(userObject + "UserObject");
                 const email = userObject['email'];
                 console.log(email);
                 if (email === 0) {
                     const newPeople = [...people, userObject];
                     setPeople(newPeople);
                 }
             });
         });
     }
     useEffect(() => {
         printUsers();
         console.log(people);
     }, []);
     console.log("hej")
     console.log(printUsers())


    return (
        <View style={styles.container}>
            <Text style={styles.header}>People! Start discovering</Text>
            {/*Inspired by excercise 3 with array lists*/}
            <ScrollView>
                {
                    people.map((peopleObject,key)=>{
                        return (
                            <Text key={key}>
                            People: "{peopleObject.email}"
                                {console.log("Hej")}
                            </Text>
                            )
                    })
                }
            </ScrollView>
        </View>
    );
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