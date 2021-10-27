import React from 'react';
import styles from '../assets/index';

import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        <Icon name="filter" /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;