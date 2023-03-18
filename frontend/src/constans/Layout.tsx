import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Layout = ({ children }: any) => {
  return <View style={styles.container}>
{/*     <StatusBar/> */}
    {children}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    padding: 30,
    flex: 1,
    alignItems: "center",
  },
})

export default Layout;
