import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { StoreProvider, useStore } from "./src/services/store";
export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider>
        <Routes />
      </StoreProvider>
    </NavigationContainer>
  );
}
