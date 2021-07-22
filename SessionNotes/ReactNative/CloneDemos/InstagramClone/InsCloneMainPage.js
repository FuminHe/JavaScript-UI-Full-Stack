import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase/app";
import LandingScreen from "./auth/Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";

const firebaseConfig = {
  apiKey: "AIzaSyArY9ipJUHMwh9Cm3J6PLQn5QHf-PnzBpI",
  authDomain: "instagramclonedemo-20ffe.firebaseapp.com",
  projectId: "instagramclonedemo-20ffe",
  storageBucket: "instagramclonedemo-20ffe.appspot.com",
  messagingSenderId: "793706574356",
  appId: "1:793706574356:web:67b1481c2006f29b26ad01",
  measurementId: "G-XE842ZKD19",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function InsCloneMainPage() {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoaded(true);
        setLoggedIn(false);
      } else {
        setLoaded(true);
        setLoggedIn(true);
      }
    });
  }, []);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>User is Logged in</Text>
    </View>
  );
}
