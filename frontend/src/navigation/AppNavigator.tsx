import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"

//import home from "../screens/home";
//import login from "../screens/login";
//import register from "../screens/register";
import newTweet from "../screens/newTweet";
import profile from "../screens/profile";
import tweets from "../screens/tweets";
import search from "../screens/search";
import tweetsScreen from "../screens/tweets";

const TabBarNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <TabBarNavigator.Navigator>
            <TabBarNavigator.Screen name="tweetsScreen" component={tweetsScreen}/>
            <TabBarNavigator.Screen name="profile" component={profile}/>
            <TabBarNavigator.Screen name="newTweet" component={newTweet}/>
            <TabBarNavigator.Screen name="search" component={search}/>
        </TabBarNavigator.Navigator>
    )
}

/* export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
} */

//export default AppNavigator;