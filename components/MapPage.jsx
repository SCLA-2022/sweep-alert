import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Pressable, Button } from 'react-native';
import * as Location from 'expo-location';
import BottomSheet from 'reanimated-bottom-sheet';
import { NativeBaseProvider, Actionsheet, Box } from 'native-base';
import AddCarPage from './AddCarPage'


const TAB_BAR_HEIGHT = 49;

export default function App({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const sheetRef = React.useRef(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  let text = 'Waiting..';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const openDrawer = () => {
    setIsOpen(true);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {location === null ? null : <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}

        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }} />


        </MapView>}
        <Button
          onPress={openDrawer}
          title="Drawer"
          color="#841584"
        />
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16" color="gray.500" _dark={{
                color: "gray.300"
              }}>
                Functionality Checkist
              </Text>
            </Box>
            <Actionsheet.Item onPress={() =>
        navigation.navigate('AddCarPage')
      }>Add Car</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </View >
    </NativeBaseProvider >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
