import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import firebase from "firebase";

const Register = () => {
  const [userLogInfo, setUserLogInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  function onSignUp() {
    const { email, password, name } = userLogInfo;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .firestore()
          .collection("Users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
      <Button onPress={onSignUp} title="Sign Up" />
    </View>
  );
};

export default Register;
