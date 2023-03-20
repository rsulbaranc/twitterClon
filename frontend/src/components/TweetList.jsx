import { FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import TweetItem from './TweetItem'

const API = "http://192.168.0.129:3000/";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThkYWYzZDU1YTQwNjJlZTk3ODg4YyIsInVzZXJuYW1lIjoiZGVtbzIiLCJpYXQiOjE2NzkzNTA4MzUsImV4cCI6MTY3OTk1NTYzNX0._LKSmfQBS7Pgt07foHH_wdd8Ba2my8dIovk_qwD0Jfc";


const TweetList = () => {

  const [tweet, setTweets] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTweet = async () => {
    const res = await fetch('http://192.168.0.129:3000/tweet', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
    const data = await res.json()
    setTweets(data)
  };

  useEffect(() => {
    loadTweet();
  }, []);

  const renderItem  = ({item}) => {
    return <TweetItem tweet={item}/>
  }

  const  onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTweet();
    setRefreshing(false);
  })


  return (
    <FlatList
    style={{width: '100%'}}
    data={tweet}
    keyExtractor={(item) => item._id + ''}
    renderItem={renderItem}
    refreshControl={
      <RefreshControl
      refreshing={refreshing}
      colors={["#34b3f6"]}
        onRefresh={onRefresh}
      />
    }
  />
  )
}

export default TweetList