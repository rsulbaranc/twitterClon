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
import { useNavigation } from "@react-navigation/native";




const Welcome = () => {

  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate('Login' as never);
  }

  const onRegisterPress = () => {
    navigation.navigate('Register' as never);
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Welcome to TwitterClone</Text>
      <ButtonGradient  onPress={onLoginPress} text={'Login'} />
      <ButtonGradient  onPress={onRegisterPress} text={'Register'}/>
  
      <Text style={styles.dontHaveAnAccount}>
      The best place to say anything
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
  button: {
    marginTop: 60,
  },
});

export default Welcome;
