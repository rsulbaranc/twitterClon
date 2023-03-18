import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TweetItem = ( {tweet}: any) => {

  const date = (tweet.create_date).substring(-1, 10);
  return (
    <View style={styles.itemContainer}>
      <Text>owner: {tweet.owner}</Text>
      <Text>{date}</Text>
      <Text>{tweet.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#fff",
        padding: 20,
        marginVertical: 8,
        borderRadius: 10
    },
    subtitle : {
    }
  })

export default TweetItem