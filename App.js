import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import {Entypo} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
     <Header title="Welcome Back" Entypo= {<Entypo name='hand' color='white' size={30} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
