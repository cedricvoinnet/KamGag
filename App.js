import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Login from './src/Login';
import { firebaseConfig } from './env';
import rootReducer from './src/store/reducers/rootReducer';
import Dashboard from './src/components/dashboard/Dashboard';

firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const login = (email, passwd) => {
  firebase.auth().signInWithEmailAndPassword(email, passwd).catch((err) => {
    const errCode = err.code;
    const errMsg = err.message;
  });
};

const store = createStore(rootReducer);

const App = () => (
  <View styles={styles.container}>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </View>
);

export default App;