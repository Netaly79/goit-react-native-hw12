import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const MainStack = createStackNavigator();

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            {/* <MainStack.Screen name="Home" component={Home} /> */}
          </MainStack.Navigator>
        </NavigationContainer>
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Растягивает SafeAreaView на всё пространство
    backgroundColor: "#fff",
  },
});
