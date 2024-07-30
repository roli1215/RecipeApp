import { Text } from "react-native";
import AppNavigator  from "./src/navigators/appNav";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App () {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}