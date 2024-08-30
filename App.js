import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home1 from "./src/screen/Home1/Home1";
import Home2 from "./src/screen/Home2/Home2";
import Home3 from "./src/screen/Home3/Home3";
import Select from "./src/screen/Select/Select";
import LoginFarmer from "./src/screen/LoginFarmer/LoginFarmer";
import SignUpFarmer from "./src/screen/SignUpFarmer/SignUpFarmer";
import CustomerLogin from "./src/screen/CustomerLogin/CustomerLogin";
import CustomerSignUp from "./src/screen/CustomerSignUp/CustomerSignUp";
import CustomerDashboard from "./src/screen/CustomerDashboard/CustomerDashboard";
import Home4 from "./src/screen/Home4/Home4";
import Home5 from "./src/screen/Home5/Home5";
import FarmerDashBoard from "./src/screen/FarmerDashBoard/FarmerDashboard";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? require("./assets/icons/home-focused.png")
              : require("./assets/icons/home.png");
          } else if (route.name === "Messages") {
            iconName = focused
              ? require("./assets/icons/mail-focused.png")
              : require("./assets/icons/mail.png");
          } else if (route.name === "Profile") {
            iconName = focused
              ? require("./assets/icons/profile-focused.png")
              : require("./assets/icons/profile.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("./assets/icons/settings-focused.png")
              : require("./assets/icons/settings.png");
          } else if (route.name === "Wallet") {
            iconName = focused
              ? require("./assets/icons/wallet-focused.png")
              : require("./assets/icons/wallet.png");
          }

          return <Image source={iconName} style={{ width: 30, height: 30 ,alignSelf:"center",justifyContent:"center" }} />;
        },
        tabBarActiveTintColor: "#4bf986",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderTopColor: "transparent",
          borderRadius: 30,
          position: 'absolute', // Ensure it doesn't affect other layouts
          bottom: 10, // Position it slightly above the bottom
          left: 10,
          right: 10,
          height: 60, // Set height if needed
      },
      })}
    >
      <Tab.Screen
        name="Home"
        component={CustomerDashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={CustomerDashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={CustomerDashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={CustomerDashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={CustomerDashboard}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
const FarmerTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? require("./assets/icons/home-focused.png")
              : require("./assets/icons/home.png");
          } else if (route.name === "Messages") {
            iconName = focused
              ? require("./assets/icons/mail-focused.png")
              : require("./assets/icons/mail.png");
          } else if (route.name === "Profile") {
            iconName = focused
              ? require("./assets/icons/profile-focused.png")
              : require("./assets/icons/profile.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("./assets/icons/settings-focused.png")
              : require("./assets/icons/settings.png");
          } else if (route.name === "Wallet") {
            iconName = focused
              ? require("./assets/icons/wallet-focused.png")
              : require("./assets/icons/wallet.png");
          }

          return <Image source={iconName} style={{ width: 30, height: 30 ,alignSelf:"center",justifyContent:"center" }} />;
        },
        tabBarActiveTintColor: "#4bf986",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderTopColor: "transparent",
          borderRadius: 30,
          position: 'absolute', // Ensure it doesn't affect other layouts
          bottom: 10, // Position it slightly above the bottom
          left: 10,
          right: 10,
          height: 60, // Set height if needed
      },
      })}
    >
      <Tab.Screen
        name="Home"
        component={FarmerDashBoard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={FarmerDashBoard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={FarmerDashBoard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={FarmerDashBoard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={CustomerDashboard}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home1">
          <Stack.Screen
            name="Home1"
            component={Home1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home2"
            component={Home2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home3"
            component={Home3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home4"
            component={Home4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home5"
            component={Home5}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Select"
            component={Select}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginFarmer"
            component={LoginFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpFarmer"
            component={SignUpFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomerLogin"
            component={CustomerLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomerSignUp"
            component={CustomerSignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomerDashboard"
            component={DashboardTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FarmerDashBoard"
            component={FarmerTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
