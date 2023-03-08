import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import ButtonGradient from "../components/ButtonGradient";

//const buttonLogin = ButtonGradient('Sign In');

const login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>sign in to your account</Text>
      <TextInput placeholder="your@email.com" style={styles.textInputs} />
      <TextInput placeholder="password" style={styles.textInputs} />
      <ButtonGradient/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    color: "#252525",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  textInputs: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },

});

export default login;
