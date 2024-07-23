import { Text } from "react-native";
import { BottomTab } from "./src/navigators/bottomTab";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App () {
  return (
    <NavigationContainer>
      <BottomTab  />
    </NavigationContainer>
  )
}