import React, {useState} from "react";
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
import { createTwet } from "../../api";

let nameUser: string

export const saveUser = (name: string) => {
  nameUser = name
}

const NewTweet = ({navigation}: any) => {

  const [data, setData] = useState({
    owner: nameUser,
    description: '',
  })

  const handleChange = (dataName: string, value: string) => setData({...data, [dataName]: value});


  const onPressTweet = async () => {
    const res = await createTwet(data);
    navigation.navigate('TabNavigator' as never);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a new Tweet</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={140}
        onChangeText={(text) => handleChange('description', text)}
        style={styles.textInputs}
      />

      <ButtonGradient  onPress={onPressTweet} text={'Tweet'}/>
      <ButtonGradient  onPress={onPressTweet} text={'Upload Image'}/>
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
