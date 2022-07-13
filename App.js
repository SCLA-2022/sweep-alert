import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapPage from './components/MapPage'
import AddCarPage from './components/AddCarPage'
import AllCarsPage from './components/AllCarsPage'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MapPage"
          component={MapPage}
        />
        <Stack.Screen name="AddCarPage" component={AddCarPage} />
        <Stack.Screen name="AllCarsPage" component={AllCarsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
