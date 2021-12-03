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

  //Making an if statement that activates different functions from the card stack library dependent on the value
const slidingHandler = (value) => {
  console.log(value)
  if (value >= 5) {
    console.log('if')
    console.log(swiper.current)
    swiper.current.swipeRight()
    DemoUsers.splice();
  } else {
    console.log('else')
    swiper.current.swipeLeft()
  }

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
              {/* Profile card made with relevant data and functionality*/}
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
       {/* Creating slider based on the react-native-community-slider library*/}
        <Slider
          style={{ height: 40, paddingTop: 1000, alignItems: 'center'}}

          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="#0000FF"
          maximumTrackTintColor="#000000"
          onSlidingComplete={(value) => {
            //Using the before defined function and putting in the value from the slider
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