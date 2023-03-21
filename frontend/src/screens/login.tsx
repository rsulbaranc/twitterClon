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
import Logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { loginUser, saveToken } from "../../api";




const Login = () => {

  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (dataName: string, value: string) => setData({...data, [dataName]: value});


  const navigation = useNavigation();


  const onLoginPress = async () => {

    let resObjet : {
      msg?: '',
      token?: ''
    }

    resObjet = await loginUser(data);
    console.log(resObjet.msg)
    if (resObjet.msg === "Invalid username or password" ){
      alert('Invalid username or password. Please try again');
    } else {
      console.log(resObjet.token)
      saveToken(resObjet.token)
      navigation.navigate('TabNavigator' as never);
    }
    
  }

  const onRegisterPress = () => {
    navigation.navigate('Register' as never);
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>sign in to your account</Text>
      <TextInput 
      placeholder="username" 
      style={styles.textInputs} 
      onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput
        placeholder="password"
        style={styles.textInputs}
        secureTextEntry={true}
        onChangeText={(text) => handleChange('password', text)}
      />
      <ButtonGradient  onPress={onLoginPress} text={'Login'}/>

      <TouchableOpacity onPress={onRegisterPress} >
        <Text style={styles.dontHaveAnAccount}>
          Don't have an acount? Create one just now!
        </Text>
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

export default Login;
