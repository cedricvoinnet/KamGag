import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './src/Login';
import firebaseConfig from './env';

firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles}>
    <Login />
  </View>
);

export default App;
