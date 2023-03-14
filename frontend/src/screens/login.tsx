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
import Logo from "../../assets/logo.png";
//const logo = require('../../assets/logo.png')
const login = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>sign in to your account</Text>
      <TextInput placeholder="your@email.com" style={styles.textInputs} />
      <TextInput
        placeholder="password"
        style={styles.textInputs}
        secureTextEntry={true}
      />
      <ButtonGradient />

      <Text style={styles.dontHaveAnAccount}>
        Don't have an acount? Create one
      </Text>
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
    paddingStart: -20,
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
  dontHaveAnAccount: {
    fontSize: 15,
    color: "gray",
    marginTop: 30,
  },
  logo: {
    width: "60%",
    height: 200,
  },
});

export default login;
