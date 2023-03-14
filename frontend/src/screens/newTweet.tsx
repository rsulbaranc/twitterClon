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



const NewTweet = () => {

  const navigation = useNavigation();

  const onTweetPress = () => {
    console.warn("Estoy tocando este boton")
    navigation.navigate('TabNavigator');
  }
  const [value, onChangeText] = React.useState('Something new to say today?');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a new Tweet</Text>
{/*       <Text style={styles.subtitle}>Write a new Tweet</Text>  */}      
{/*       <TextInput placeholder="your@email.com" style={styles.textInputs} /> */}
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={140}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textInputs}
      />

      <ButtonGradient  onPress={onTweetPress} text={'Tweet'}/>
      <ButtonGradient  onPress={onTweetPress} text={'Upload Image'}/>
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
    fontSize: 40,
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
    height: 100,
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

export default NewTweet;
