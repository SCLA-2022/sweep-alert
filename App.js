
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import * as Location from 'expo-location';
import BottomDrawer from 'react-native-bottom-drawer-view';

const TAB_BAR_HEIGHT = 49;

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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
    console.log('open drawer')
  }
  renderContent = () => {
    return (
        <View>
            <Text>Get directions to your location</Text>
        </View>
    )
}
  return (
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
      
      <BottomDrawer
                containerHeight={100}
                offset={TAB_BAR_HEIGHT}
            >
                {this.renderContent()}
            </BottomDrawer>
          
      {/* <Text style={styles.paragraph}>{text}</Text> */}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
