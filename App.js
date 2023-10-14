import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';


import FirebaseAPI from './src/firebase/firebaseAPI'

import {Text, View} from 'react-native';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)


  //firebase check 
  FirebaseAPI.readEvents()

  return (
    <View style={{alignItems: 'center'}}>
 <Text> Hello i'm centered text</Text>
</View>
  )
}