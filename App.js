import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Payment from "./screens/Payment";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import PostNotification from "./screens/PostNotification";
import CardPayment from "./screens/CardPayment";
import DrawerNavigation from "./navigation/DrawerNavigation";
import Users from "./screens/Users";
import Users from "./screens/Users";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="PostNotification" component={PostNotification} />
        <Stack.Screen name="CardPayment" component={CardPayment} />
        <Stack.Screen name="Users" component={Users} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
