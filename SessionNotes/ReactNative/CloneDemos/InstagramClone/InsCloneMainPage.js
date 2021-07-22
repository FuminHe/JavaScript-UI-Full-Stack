import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import LandingScreen from "./auth/Landing";

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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
