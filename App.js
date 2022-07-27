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
  });

  console.log(loaded);
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
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default MyStack;
