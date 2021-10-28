import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Slider from '@react-native-community/slider';

import {Element} from 'react';
class SliderExample extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          step={0.5}
          style={styles.slider}
          {...this.props}
          onValueChange={value => this.setState({value: value})}
        />
      </View>
    );
  }
}

class SlidingStartExample extends React.Component {
  state = {
    slideStartingValue: 0,
    slideStartingCount: 0,
  }
};