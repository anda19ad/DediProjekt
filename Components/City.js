import React from 'react';
import styles from '../assets/style';

import { Text, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

//Simple component made ready for more content later
const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
          <Ionicons name="globe" /> Select location
      </Text>
    </TouchableOpacity>
  );
};

export default City;