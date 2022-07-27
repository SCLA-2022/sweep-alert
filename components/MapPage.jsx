import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { NativeBaseProvider } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";

const TAB_BAR_HEIGHT = 49;
const mapStyle = [
  {
    featureType: "landscape",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default function App({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["15%", "25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  let text = "Waiting..";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // const openDrawer = () => {
  //   setIsOpen(true);
  // };

  // const onClose = () => {
  //   setIsOpen(false);
  // };
  const bodyText = "3655 S Grand Ave #220, Los Angeles, CA 90007";

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {location === null ? null : (
          <MapView
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
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
              }}
            />
            <Marker
              coordinate={{
                latitude: 34.00327679084823,
                longitude: -118.23254024639981,
              }}
            />
            <Marker
              coordinate={{
                latitude: 34.022137315448866,
                longitude: -118.30012121882638,
              }}
            />
            <View style={styles.IconStyle}>
              {/* <Entypo
                style={styles.magnifyingstyle}
                name="magnifying-glass"
                size={24}
                color="black"
              /> */}
              <Entypo
                onPress={() => navigation.navigate("Dashboard")}
                style={styles.dotsstyle}
                name="dots-three-vertical"
                size={24}
                color="white"
              />
            </View>
          </MapView>
        )}

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "#902E2E" }}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <View style={styles.ViewStyle}>
              <Text style={styles.titleText}>Your Current Location</Text>
              <Text style={styles.baseText}>
                3655 S Grand Ave #220,{"\n"}Los Angeles, CA 90007
              </Text>
            </View>
            <View style={styles.iconContainer}>
              {/* <Entypo
                onPress={() => navigation.navigate("RoutesPage")}
                name="chevron-right"
                size={30}
                color="white"
              /> */}
              <Entypo
                onPress={() => navigation.navigate("RoutesPage")}
                name="magnifying-glass"
                size={30}
                color="white"
              />
            </View>
          </View>
        </BottomSheet>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  magnifyingstyle: {
    // alignSelf: 'flex-end',
    // top: 100,
    backgroundColor: "#902E2E",
    // padding: 50,
  },
  ellipsefour: {
    alignItems: "flex-end",
    width: 50,
    height: 50,
    left: 372,
    top: 177,
    background: "#912E2E",
  },
  dotsstyle: {
    backgroundColor: "#902E2E",
    // borderRadius: 15,
    // borderWidth: 10,
    // borderColor: '#902E2E',
    overflow: "hidden",
    top: 177,
    //   width: 44,
    //  height: 44,
    borderRadius: 23,
    padding: 10,
    marginHorizontal: 6,
  },
  IconStyle: {
    alignItems: "flex-end",

    // backgroundColor: '#902E2E'
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titleText: {
    fontSize: 20,
    // fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: -5,
    letterSpacing: 2.5,
    justifyContent: "center",
    flexDirection: "row",
    fontFamily: "Roboto", //"RobotoCondensed_400Regular",
  },
  baseText: {
    fontSize: 27,
    color: "white",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: 15,
    fontFamily: "Roboto",
  },
  contentContainer: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#902E2E",
    flexDirection: "row",
    paddingHorizontal: 18,
    marginTop: 20,
  },
  ViewStyle: {
    flexDirection: "column",
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 50,
    marginHorizontal: 30,
  },
});

{
  /* <Button onPress={openDrawer} title="Dashboard" color="black" /> */
}
{
  /* <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <Actionsheet.Item onPress={() => navigation.navigate("AddCarPage")}>
              Add Car
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() => navigation.navigate("AllCarsPage")}
            >
              View All Cars
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => navigation.navigate("LoginPage")}>
              Login/Make account
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => navigation.navigate("Timer1")}>
              Timer1
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() => navigation.navigate("DetailedRoutes", {
                day: 'Thursyda',
                time: '121:!2`121212',
                frequency: 'frey sdfsasdsad'
              })}
            >
              DetailedRoutesExample
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet> */
}
//   <View
//   style={{
//     position: "absolute", //use absolute position to show button on top of the map
//     top: "70%", //for center align
//     alignSelf: "center", //for align to right
//   }}
// ></View>
{
  /* <Marker
              coordinate={{ latitude: 34.03308, longitude: -118.29202 }}
              pinColor={"lightblue"} // any color
              title={"76 Gas Station"}
              description={"Pump #2, beware"}
              image={require('../assets/Group236.png')}
            /> */
}
