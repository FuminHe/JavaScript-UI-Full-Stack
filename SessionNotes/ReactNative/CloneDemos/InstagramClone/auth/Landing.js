import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.landingContainer}>
      <Text>Landing Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      ></Button>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});
