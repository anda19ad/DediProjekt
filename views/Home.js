import React, {useRef, useState, useEffect} from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../Components/City';
import Filters from '../Components/Filters';
import CardItem from '../Components/CardItem';
import styles from '../assets/style';
import Demo from '../assets/data/demo';
import Slider from '@react-native-community/slider';

var DemoUsers = Demo;

const Home = () => {


const swiper = useRef({current: {props: {onSwipedRight: () => console.log('props')}}})
const [users, setUsers] = useState(null)
//useEffect hooket, er en life-cycle method, hvilket betyder, at den kører, hver gang "depencies ændrer sig"
useEffect(() =>{
  console.log("on effect")
  setUsers(DemoUsers)
}, [])

const slidingHandler = (value) => {
  console.log(parseInt(value))
  if (value >= 5) {
    console.log('if')
     console.log(swiper)
    swiper.current.props.onSwipedRight()
    DemoUsers.splice();
    setUsers(users => users.filter((_, i) => i !== users.length -1))

  } else {
    console.log('else')
    swiper.current.props.onSwipedLeft()}

}

console.log(users)
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>


          {users && users.map((item, index) => (
            <Card key={index}>
              {/* Nedenfor laves profil kortet med relevante data og funktionalitet*/}
              <CardItem 
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                action
                
                onPressLeft={() => { 
                  console.log(swiper),
                  swiper.current.props.onSwipedLeft()}
                } 
                onPressRight={() => swiper.current.props.onSwipedRight()}
              
              />
              
            </Card>
          ))}
          
        

       {/* Nedenfor laves slideren baseret på react-native-community library*/}
        <Slider
          style={{width: 200, height: 40, paddingTop: 1000, alignItems: 'center'}}

          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="#0000FF"
          maximumTrackTintColor="#000000"
          onSlidingComplete={(value) => {
            slidingHandler(value)
      
            //this.swiper.current.props.slidingHandler()
          }
        }
        />
      </ScrollView>
    </ImageBackground>
  );
};

    //Opretter en slidingHandler til at håndtere værdien i slideren, samt hvornår den skal swipe ja/nej
    

export default Home;