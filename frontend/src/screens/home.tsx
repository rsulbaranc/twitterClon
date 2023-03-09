import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator, AppNavigator }from '../navigation/AppNavigator';


const home = () => {
  return (

   <View style={styles.container}>
      <Text>Hola mundo! Home</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 130
   },
   tittle: {
    fontSize: 30,
   }
});

export default home;
