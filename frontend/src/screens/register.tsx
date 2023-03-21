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
import { registerUser } from "../../api";




const Register = ({navigation}: any) => {

  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    username: ''
  })

  const handleChange = (dataName: string, value: string) => setData({...data, [dataName]: value});


  const onRegisterPress = async () => {

    let resObject : {
      msg?: '',
    }

    const res = await registerUser(data);
    
    if (resObject.msg == 'Some fields are empty.') {
      alert('Some fields are empty. Please complete all fields');
    } else {
      navigation.navigate('Login' as never);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Create a new account</Text>
      <TextInput 
      placeholder="First Name" 
      style={styles.textInputs} 
      onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput 
      placeholder="Last Name" 
      style={styles.textInputs} 
      onChangeText={(text) => handleChange('lastName', text)}
      />
      <TextInput 
      placeholder="username" 
      style={styles.textInputs} 
      onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput 
      placeholder="your@email.com" 
      style={styles.textInputs} 
      onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        placeholder="password"
        style={styles.textInputs}
        secureTextEntry={true}
        onChangeText={(text) => handleChange('password', text)}
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
