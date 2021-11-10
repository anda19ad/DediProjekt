import React from 'react';
import styles from '../assets/style';

import { Text, View } from 'react-native';
import Icon from './Icon';
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name
}) => {
  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
            <Ionicons name="heart" /> {matches} Dutch Art
        </Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
            <Ionicons name="information-circle" />
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
            <Ionicons name="heart" />
        </Text>
        <Text style={styles.infoContent}>{info2} Personal stuff</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
            <Ionicons name="heart" />
        </Text>
        <Text style={styles.infoContent}>{info3} Other personal stuff on a deeper level</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
            <Ionicons name="heart" />
        </Text>
        <Text style={styles.infoContent}>{info4} Some more interests</Text>
      </View>
    </View>
  );
};

export default ProfileItem;