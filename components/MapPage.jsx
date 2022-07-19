import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Button,
} from "react-native";
import { Searchbar } from "react-native-paper";
import * as Location from "expo-location";
import { NativeBaseProvider, Actionsheet, Box } from "native-base";
import AddCarPage from "./AddCarPage";
import AllCarsPage from "./AllCarsPage";
import DetailedRoutes from "./DetailedRoutes";
import Timer1 from "./Timer1";
import RoutesPage from "./RoutesPage";
import BottomSheet from "@gorhom/bottom-sheet";
const TAB_BAR_HEIGHT = 49;

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
  const snapPoints = useMemo(() => ["15%", "30%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  let text = "Waiting..";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const openDrawer = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  const bodyText = "3655 S Grand Ave #220, Los Angeles, CA 90007";

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {location === null ? null : (
          <MapView
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
      
              <Entypo
              onPress={() => navigation.navigate("RoutesPage")}
              name="chevron-right"
              size={30}
              color="black"
            />
            </View>
 
          </View>
          <View
            style={{
              position: "absolute", //use absolute position to show button on top of the map
              top: "70%", //for center align
              alignSelf: "center", //for align to right
            }}
          >
            <Button onPress={openDrawer} title="Dashboard" color="black" />
          </View>
        </BottomSheet>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            {/* <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            /> */}
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
            <Actionsheet.Item onPress={() => navigation.navigate("RoutesPage")}>
              RoutesPage
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() => navigation.navigate("DetailedRoutes")}
            >
              DetailedRoutesExample
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: -5,
    justifyContent: "center",
    flexDirection: "row",
  },
  baseText: {
    fontSize: 22,
    color: "white",
    justifyContent: "left",
    alignSelf: "flex-start",
    marginTop: 5,
  },
  contentContainer: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#902E2E",
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginTop: 20 
  },
  ViewStyle: {
    flexDirection: 'column',
    flex: 1
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginTop: 45,
    marginHorizontal: 15,
  }
});
