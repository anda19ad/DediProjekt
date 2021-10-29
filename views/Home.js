import React, {useRef, useState} from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../Components/City';
import Filters from '../Components/Filters';
import CardItem from '../Components/CardItem';
import styles from '../assets/style';
import Demo from '../assets/data/demo';
import Slider from '@react-native-community/slider';

var DemoUsers = Demo;

const Home = () => {
  const swiper = useRef(null)

const slidingHandler = (value) => {
  console.log(value)
  if (value >= 5) {
    console.log('if')
     
    swiper.current.props.onSwipedRight()
    DemoUsers.splice();
  } else {
    console.log('else')
    swiper.current.props.onSwipedLeft()}

}

  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper}
        > 

          {Demo.map((item, index) => (
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
          
        
        </CardStack>
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
      </View>
    </ImageBackground>
  );
};

    //Opretter en slidingHandler til at håndtere værdien i slideren, samt hvornår den skal swipe ja/nej
    

export default Home;