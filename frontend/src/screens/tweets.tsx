import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import { getTweets } from "../../api";
import TweetList from "../components/TweetList";
import Layout from "../constans/Layout";



const tweetsScreen = () => {

  

  return (
    <Layout>
      <TweetList/>
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
