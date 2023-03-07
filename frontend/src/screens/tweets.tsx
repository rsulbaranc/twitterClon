import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const tweets = () => {
  return (
    <View style={styles.container}>
      <Text>Hola mundo! Tweets</Text>
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

export default tweets;
