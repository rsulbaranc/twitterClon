import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const search = () => {
  return (
    <View style={styles.container}>
      <Text>Hola mundo! Search</Text>
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

export default search;
