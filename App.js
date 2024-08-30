import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home1 from "./src/screen/Home1/Home1";
import Home2 from "./src/screen/Home2/Home2";
import Home3 from "./src/screen/Home3/Home3";
import Select from "./src/screen/Select/Select";
import Home4 from "./src/screen/Home4/Home4";
import Home5 from "./src/screen/Home5/Home5";
import LoginFarmer from "./src/screen/LoginFarmer/LoginFarmer";
import SignUpFarmer from "./src/screen/SignUpFarmer/SignUpFarmer";
import CustomerLogin from "./src/screen/CustomerLogin/CustomerLogin";
import CustomerSignUp from "./src/screen/CustomerSignUp/CustomerSignUp";
import CustomerDashboard from "./src/screen/CustomerDashboard/CustomerDashboard";
// Import other screens here

const Stack = createNativeStackNavigator();

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
            component={CustomerDashboard}
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
