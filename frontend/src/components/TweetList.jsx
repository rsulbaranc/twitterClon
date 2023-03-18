import { FlatList, Text } from 'react-native'
import React from 'react'
import TweetItem from './TweetItem'


const TweetList = ({tweets}) => {
  const renderItem  = ({item}) => {
    return <TweetItem tweet={item}/>
  }


  return (
    <FlatList
    style={{width: '100%'}}
    data={tweets}
    keyExtractor={(item) => item._id + ''}
    renderItem={renderItem}
  />
  )
}

export default TweetList