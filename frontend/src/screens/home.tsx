import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator, AppNavigator }from '../navigation/AppNavigator';

const home = () => {
  return (
    <View >
      <View style={styles.container}>
      <Text>Hola mundo! Home</Text>
      </View>
{/*       <View>
        <AppNavigator/>
      </View>  */}
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
});

export default home;
