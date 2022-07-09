
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import * as Location from 'expo-location';
import BottomSheet from 'reanimated-bottom-sheet';
import { NativeBaseProvider, Actionsheet, Box } from 'native-base';

const TAB_BAR_HEIGHT = 49;

export default function App() {
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

  const renderContent = () => {
    return (
      <View>
        <Text>Get directions to your location</Text>
      </View>
    )
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
            onPress={openDrawer}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }} />

        </MapView>}

        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16" color="gray.500" _dark={{
                color: "gray.300"
              }}>
                Albums
              </Text>
            </Box>
            <Actionsheet.Item>Delete</Actionsheet.Item>
            <Actionsheet.Item>Share</Actionsheet.Item>
            <Actionsheet.Item>Play</Actionsheet.Item>
            <Actionsheet.Item>Favourite</Actionsheet.Item>
            <Actionsheet.Item>Cancel</Actionsheet.Item>
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
