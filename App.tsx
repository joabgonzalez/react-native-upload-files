import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import RootTabNav from "./src/navigation/RootTabNav";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootTabNav />
      </NavigationContainer>
    </>
  );
}
