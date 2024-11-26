import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen"; // Add this screen
import CreatePostsScreen from "../screens/CreatePostsScreen"; // Add this screen
import ProfileIconComponent from "../assets/icons/ProfileIconComponent";
import AddPostIconComponent from "../assets/icons/AddPostIconComponent";
import GridIconComponent from "../assets/icons/GridIconComponent";

const Tab = createBottomTabNavigator();

const TabNavigator = ({initialTab}) => (
  <Tab.Navigator
    initialRouteName={initialTab}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        // Условие для иконки
        let iconColor = focused ? "white" : "#212121";  // Active tab - orange, inactive tab - gray
        
        if (route.name === "Map") {
          return <GridIconComponent color={iconColor} size={size} />;
        } else if (route.name === "Profile") {
          return <ProfileIconComponent color={iconColor} size={size} />;
        } else if (route.name === "Add") {
          return <AddPostIconComponent color={iconColor} size={size} />;
        }
      },
      tabBarActiveTintColor: "#FF6C00", // Цвет иконки при активной вкладке
      tabBarInactiveTintColor: "gray", // Цвет иконки при неактивной вкладке
      tabBarStyle: {
        backgroundColor: "#FFF", // Фон табов
        height: 80, // Высота вкладки
        justifyContent: 'center', // Центрируем элементы по вертикали
      },
      tabBarLabelStyle: {
        fontSize: 12, // Размер текста под иконкой (если он есть)
      },
      tabBarIconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarButton: (props) => (
        <View style={{
          marginVertical: 17,
          justifyContent: 'center',
          alignItems: 'center', 
        }}>
        <View
          style={{
            ...props.style,
            backgroundColor: props.accessibilityState.selected ? "#FF6C00" : "transparent", // Оранжевый фон для активной вкладки
            borderRadius: 20, // Скругление фона
            padding: 8,
            justifyContent: 'center', // Центрируем кнопку
            alignItems: 'center', 
            width: 70,
            height: 40
          }}
        >
          {props.children}
        </View>
        </View>
      ),
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Add" component={CreatePostsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;




