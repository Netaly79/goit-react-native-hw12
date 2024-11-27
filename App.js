import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import LogOutComponent from "./assets/icons/LogOutIconComponent";
import TabNavigator from "./Components/TabNavigator";

const MainStack = createStackNavigator();

export default function App() {
  const [isUserLogged, setLogged] = useState(true);
  return (
    <NavigationContainer>
      {isUserLogged ? (
        <TabNavigator />
      ) : (
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Login"
            options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} setLogged={setLogged} />}
          </MainStack.Screen>
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
