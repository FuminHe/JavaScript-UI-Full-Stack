import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import firebase from "firebase";

const Login = () => {
  const [userLogInfo, setUserLogInfo] = useState({
    email: "",
    password: "",
  });

  function onSignIn() {
    const { email, password } = userLogInfo;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <View>
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
      <Button onPress={onSignIn} title="Sign Up" />
    </View>
  );
};

export default Login;
