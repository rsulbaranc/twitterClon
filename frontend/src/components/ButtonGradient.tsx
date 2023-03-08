import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonGradient = () => {
    return (
        <TouchableOpacity style={styles.container}>
        <LinearGradient
        // Button Linear Gradient
        colors={['#89cef7', '#34b3f6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.button}
        >
        <Text style={styles.text}>Login</Text>
      </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: { 
   /*      flex: 1, */
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: '#fff',
    }
});

export default ButtonGradient;