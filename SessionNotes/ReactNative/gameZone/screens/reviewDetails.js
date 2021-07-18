import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ReviewDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Review Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  titleText: {
    fontSize: 20,
  },
});
