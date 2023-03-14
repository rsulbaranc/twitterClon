import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import ButtonGradient from "../components/ButtonGradient";
import { useNavigation } from "@react-navigation/native";
//const logo = require('../../assets/logo.png')



const Register = () => {

  const navigation = useNavigation();

  const onRegisterPress = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Create a new account</Text>
      <TextInput placeholder="First Name" style={styles.textInputs} />
      <TextInput placeholder="Last Name" style={styles.textInputs} />
      <TextInput placeholder="About You" style={styles.textInputs} />
      <TextInput placeholder="your@email.com" style={styles.textInputs} />
      <TextInput
        placeholder="password"
        style={styles.textInputs}
        secureTextEntry={true}
      />
      <ButtonGradient  onPress={onRegisterPress} text={'Sign Up'}/>

  
      <TouchableOpacity style={styles.touchableTerms} onPress={() =>  alert('You are giving your permission for us to sell your data and information.')}>
      <Text style={styles.termsAndConditions}>by registering you accept all the terms</Text>
      <Text style={styles.termsAndConditions}>and conditions of the service.</Text>
      </TouchableOpacity>

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
    fontSize: 70,
    color: "#252525",
    fontWeight: "bold",
    paddingStart: -20,
  },
  subtitle: {
    fontSize: 25,
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
  termsAndConditions: {
    fontSize: 15,
    color: "gray",
  },
  logo: {
    width: "60%",
    height: 200,
  },
  touchableTerms: {
    marginTop: 20,
  },
});

export default Register;
