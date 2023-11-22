import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Login from "../screens/Login";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Drawer.Screen name="Login" component={Login} /> */}
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
