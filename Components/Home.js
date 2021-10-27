import React, {useRef, useState} from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from './City';
import Filters from './Filters';
import CardItem from './CardItem';
import styles from '../assets/index';
import Demo from '../assets/data/demo';

const Home = () => {
  const swiper = useRef(null)
  console.log(swiper.props)
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
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => { 
                  console.log(swiper),
                  swiper.current.props.onSwipedLeft()}
                }
                onPressRight={() => swiper.current.props.onSwipedRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;