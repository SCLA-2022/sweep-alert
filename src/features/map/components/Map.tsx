import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { GOOGLE_MAP_THEME, GOOGLE_MAP_THEME_ZOOM } from "../../../config/map";
import useCurrentLocation from "../hooks/useCurrentLocation";
import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// user current location marker
const userMarker = require("../../../../assets/startinglocation.png")

/**
 * Renders google map
 * @returns
 */
const Map = () => {
  // map custom style
  const [mapStyle, setMapStyle] = useState<any[]>(GOOGLE_MAP_THEME);
  // get user current location using phone geolocation
  const { location, error } = useCurrentLocation();

  // map view ref
  let mapView: MapView | null = null;

  /**
   * Detects changes in map scroll or zoom. Will
   * toggle the map theme based on how zoomed in
   * the user is
   * @param region 
   */
  const onRegionChange = (region: Region) => {
    // calc zoom on scale 1-20 (zoomed all the way in)
    let zoom = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);

    // toggle map theme based on current zoom level
    if (zoom > 18) setMapStyle(GOOGLE_MAP_THEME_ZOOM);
    else setMapStyle(GOOGLE_MAP_THEME);
  };
  
  /**
   * TODO: Render error pop up / alert
   * - example: https://reactnative.dev/docs/alert
   */
  if (error) {
    return <Text>{error}</Text>;
  }

  if (location !== null) {
    let { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.05; //Very high zoom level
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    // construct the map initial region
    const mapInitialRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

    const goToInitialRegion = () => {
      if (mapView) {
        mapView.animateToRegion(mapInitialRegion, 1000);
      }
    };

    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        initialRegion={mapInitialRegion}
        style={styles.map}
        ref={(map) => {
          mapView = map;
        }}
        onRegionChange={onRegionChange}
      >
        <Marker
          onPress={() => {
            console.log("Modal has been opened.");
          }}
          coordinate={{
            latitude: 34.017222,
            longitude: -118.278205,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Image
            source={userMarker}
            style={{ width: 26, height: 28 }}
            resizeMode="contain"
          />
        </Marker>

        <View style={styles.IconStyle}>
          <Ionicons
            onPress={() => {
              //navigation.navigate("CurrentAlarms"
            }}
            style={styles.dotsstyle}
            name="timer-outline"
            size={24}
            color="white"
          />
          <MaterialIcons
            style={styles.gpsstyle}
            name="gps-fixed"
            size={24}
            color="white"
            onPress={goToInitialRegion}
          />
        </View>
      </MapView>
    );
  }

  return null;
};

export default Map;

const styles = StyleSheet.create({
  dotsstyle: {
    backgroundColor: "#902E2E",
    overflow: "hidden",
    top: 480,
    borderRadius: 23,
    padding: 10,
    marginHorizontal: 6,
  },
  gpsstyle: {
    flexDirection: "row",
    backgroundColor: "#902E2E",
    overflow: "hidden",
    top: 505,
    borderRadius: 23,
    padding: 10,
    marginHorizontal: 6,
  },
  IconStyle: {
    alignItems: "flex-end",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
