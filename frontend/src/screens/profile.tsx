import React, {useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";

const profile = () => {

  return (
    <View style={styles.container}>
      <Text>Hola mundo! Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default profile;
