import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import firebase from "firebase";

const Register = () => {
  const [userLogInfo, setUserLogInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  onSignUp = () => {};
  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => setUserLogInfo({ ...userLogInfo, name })}
      />
      <TextInput
        placeholder="email"
        onChangeText={(email) => setUserLogInfo({ ...userLogInfo, email })}
      />
      <TextInput
        placeholder="password"
        onChangeText={(password) =>
          setUserLogInfo({ ...userLogInfo, password })
        }
      />
      <Button onPress={() => this.onSignUp()} title="Sign Up" />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
