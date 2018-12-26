import React from 'react';
import {
  Image, Text, View, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const NavBar = () => (
  <View style={styles.container}>
    <Text>KamGag</Text>
    <Image source={{ uri: 'https://img.icons8.com/color/48/000000/marceline.png' }} style={{ height: 20, width: 20 }} />
  </View>
);

export default NavBar;
