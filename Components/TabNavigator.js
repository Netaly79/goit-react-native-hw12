import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileIconComponent from "../assets/icons/ProfileIconComponent";
import AddPostIconComponent from "../assets/icons/AddPostIconComponent";
import GridIconComponent from "../assets/icons/GridIconComponent";
import LogOutComponent from "../assets/icons/LogOutIconComponent";

const Tab = createBottomTabNavigator();

const logOut = () => <LogOutComponent onPress={handleLogOut} />;
const handleLogOut = () => {
 
};

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Posts"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconColor = focused ? "white" : "#212121";

        if (route.name === "Posts") {
          return <GridIconComponent color={iconColor} size={size} />;
        } else if (route.name === "Profile") {
          return <ProfileIconComponent color={iconColor} size={size} />;
        } else if (route.name === "Add" || route.name === "Posts") {
          return <AddPostIconComponent color={iconColor} size={size} />;
        }
      },
      tabBarActiveTintColor: "#FF6C00",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: "#FFF",
        height: 80,
        justifyContent: "center",
      },
      tabBarIconStyle: {
        justifyContent: "center",
        alignItems: "center",
      },
      tabBarButton: (props) => (
        <TouchableOpacity
          {...props}
          style={{
            marginVertical: 17,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View
            style={{
              backgroundColor: props.accessibilityState.selected
                ? "#FF6C00"
                : "transparent",
              borderRadius: 20,
              padding: 8,
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 40,
            }}>
            {props.children}
          </View>
        </TouchableOpacity>
      ),
      tabBarShowLabel: false,
    })}>
    <Tab.Screen name="Posts" component={PostsScreen} options={{
      title: "Публікації",
      headerRight: () => (
        <View style={{ marginRight: 16 }}>
          {logOut()}
        </View>
      ),
    }}/>
    <Tab.Screen name="Add" component={CreatePostsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
