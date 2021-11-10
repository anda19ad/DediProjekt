import React from 'react';
import styles from '../assets/style';

import { Text, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
          <Ionicons name="add" />
          Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;