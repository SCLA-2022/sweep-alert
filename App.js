import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapPage from "./components/MapPage";
import AddCarPage from "./components/AddCarPage";
import AllCarsPage from "./components/AllCarsPage";
import LoginPage from "./components/LoginPage";
import CurrentAlarms from "./components/CurrentAlarms";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RoutesPage from "./components/RoutesPage";
import DetailedRoutes from "./components/DetailedRoutes";
import Dashboard from "./components/Dashboard";

import SavedAddresses from "./components/SavedAddresses";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const [loaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoCondensedbold: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    RobotoCondensedlight: require("./assets/fonts/RobotoCondensed-Light.ttf"),
    Robotomid: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MapPage"
            component={MapPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AddCarPage"
            component={AddCarPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AllCarsPage"
            component={AllCarsPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CurrentAlarms"
            component={CurrentAlarms}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RoutesPage"
            component={RoutesPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DetailedRoutes"
            component={DetailedRoutes}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SavedAddresses"
            component={SavedAddresses}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default MyStack;
