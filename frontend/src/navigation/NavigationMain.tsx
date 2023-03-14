import React from 'react';
import {View, Text} from 'react-native';
import Login from '../screens/login';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './AppNavigator';
import Welcome from '../screens/welcome';
import Register from '../screens/register';



const Stack = createNativeStackNavigator();

const NavigationMain = () => {
    return (

    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
    
    )
}

export default NavigationMain;