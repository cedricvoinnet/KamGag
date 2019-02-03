import React from 'react';
import firebase from 'firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FAB from 'react-native-fab';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebaseConfig from './env';
import rootReducer from './src/store/reducers/rootReducer';
import CreatePost from './src/components/posts/CreatePost';
import SignIn from './src/components/auth/SignIn';
import HomeScreen from './src/Screens/HomeScreen';

firebase.initializeApp(firebaseConfig);

const store = createStore(rootReducer);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    CreatePost: {
      screen: CreatePost,
    },
    SignIn: {
      screen: SignIn,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
