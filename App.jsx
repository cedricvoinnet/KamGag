import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDwQg5UaccjkV4_68R86bDtP8meV2pPK28',
  authDomain: 'kamgag-9d909.firebaseapp.com',
  databaseURL: 'https://kamgag-9d909.firebaseio.com',
  projectId: 'kamgag-9d909',
  storageBucket: 'kamgag-9d909.appspot.com',
  messagingSenderId: '428828605117',
};
firebase.initializeApp(config);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
