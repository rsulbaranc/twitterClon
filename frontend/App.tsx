import React from 'react';
import welcome from './src/screens/welcome'
import Login from './src/screens/login';
import { RollInLeft } from 'react-native-reanimated';
import NavigationMain from './src/navigation/NavigationMain';
import tweetsScreen from './src/screens/tweets';


const Screen1 = tweetsScreen

export default function App({}) {
  return (
/*     <Screen1/> */
    <NavigationMain/>
  );
}