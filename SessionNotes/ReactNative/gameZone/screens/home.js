import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globals";

export default function Home() {
  // const pressHandler
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to Review Details" onPress={}/>
    </View>
  );
}

const styles = StyleSheet.create({});
