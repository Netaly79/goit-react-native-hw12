import "react-native-gesture-handler";
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
  return (
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}  />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }} 
            />
            <MainStack.Screen name="Home" component={PostsScreen} 
            options={{
              title: "Публікації",
              headerStyle: {
              },
              headerTintColor: "#212121",
              headerTitleStyle: {
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 22,
                letterSpacing: -0.408
              },
              headerRight: () => (
                <Pressable style={{paddingHorizontal: 8}}>
                  <LogOutComponent/>
                </Pressable>
              ),
            }}/>
          </MainStack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
