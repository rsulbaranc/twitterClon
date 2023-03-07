import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const login = () => {
  return (
    <View style={styles.container}>
      <Text>Hola mundo! Login</Text>
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

export default login;
