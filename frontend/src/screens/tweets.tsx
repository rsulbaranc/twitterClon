import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { getTweets } from "../../api";
import TweetList from "../components/TweetList";
import Layout from "../constans/Layout";

const API = "http://192.168.0.129:3000/";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY2NWI1MDM2ZDFkYzA5NTVkYjI4YSIsInVzZXJuYW1lIjoidG9tYXMiLCJpYXQiOjE2NzkwODY3ODYsImV4cCI6MTY3OTY5MTU4Nn0.TP9mymFTG2YdR4c9kDLqoNp8HhfX3D8q5gvpEBLarHk";

const tweetsScreen = () => {

  const [tweet, setTweets] = useState([])

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

  return (
    <Layout>
      <TweetList tweets={tweet}/>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default tweetsScreen;
