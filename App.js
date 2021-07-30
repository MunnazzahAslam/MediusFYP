import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import {Entypo} from '@expo/vector-icons';
import MediusNavigator from "./navigation/MediusNavigator";
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './redux/store';
// Import Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <Provider store={store}>
            <MediusNavigator/>
  </Provider>
   
    );
};

export default App;