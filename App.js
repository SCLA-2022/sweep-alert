import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapPage from './Components/MapPage'
import AddCarPage from './Components/AddCarPage'
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
