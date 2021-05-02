import React from "react";
import "react-native-gesture-handler";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserContextProvider from "./src/contexts/UserContext";

import { MainTab } from "./src/navigators/index";

import { SingIn, Preview } from "./src/screens/index";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"SingIn"}
        >
          <Stack.Screen name="SingIn" component={SingIn} />
          <Stack.Screen name="Home" component={MainTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
