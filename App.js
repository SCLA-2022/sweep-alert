import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapPage from './components/MapPage'
import AddCarPage from './components/AddCarPage'
import AllCarsPage from './components/AllCarsPage'
import LoginPage from './components/LoginPage'
import Timer1 from './components/Timer1'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MapPage"
          component={MapPage}
        />
        <Stack.Screen name="AddCarPage" component={AddCarPage} />
        <Stack.Screen name="AllCarsPage" component={AllCarsPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Timer1" component={Timer1} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default MyStack;
