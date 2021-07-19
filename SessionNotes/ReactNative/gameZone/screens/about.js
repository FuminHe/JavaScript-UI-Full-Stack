import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globals";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
