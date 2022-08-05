import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { NativeBaseProvider } from "native-base";
import { Dimensions } from "react-native";
import { getCoordinates } from "../services/polyline.service";
const { height, width } = Dimensions.get("window");
const LATITUDE_DELTA = 0.0055;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
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
const sideOneCoord = [
  { latitude: 34.01683926494254, longitude: -118.27823049073167 }, // start coord
  { latitude: 34.02012751645479, longitude: -118.27616124328947 }, // end coord
];
const sideTwoCoord = [
  { latitude: 34.01866254770548, longitude: -118.27714829755081 },
  { latitude: 34.01686750095174, longitude: -118.27829834333208 },
];
// const sideThreeCoord = [
//   { latitude: 34.018705875964365, longitude: -118.2771146922712 },
//   { latitude: 34.01878555399102, longitude: -118.27706913448912 }]
const sideFourCoord = [
  {latitude: 34.01683702330492, longitude: -118.27823471334372 },
  {latitude: 34.0163143790497,  longitude: -118.27711148278959 },
];
const sideFiveCoord = [
  {latitude: 34.01679477499265, longitutde: -118.27826927285786 },
  {latitude: 34.01626459896893, longitutde: -118.27712618001468},
];
const linesToRender = [sideOneCoord, sideTwoCoord, sideFourCoord, sideFiveCoord];
export default function App({ navigation, route }) {
  const [polyLines, setPolyLines] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState({
    latitude: 34.017222,
    longitude: -118.278205,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  // const [sideOneColor, setSideOneColor] = useState("#000");
  // const [sideTwoColor, setSideTwoColor] = useState("#000");
  // const [sideThreeColor, setSideThreeColor] = useState("#000");
  const [minDistance, setMinDistance] = useState(1);
  const [shortestSide, setShortestSide] = useState(markerLocation);
  const [test, setTest] = useState([]);
  function compareLoc(routeCoord) {
    // console.log(location);
    // console.log(routeCoord);
    let curDistance = Math.sqrt(
      Math.pow(markerLocation.latitude - routeCoord.latitude, 2) +
        Math.pow(markerLocation.longitude - routeCoord.longitude, 2)
    );
    //console.log(curDistance);
    if (minDistance > curDistance) {
      setMinDistance(curDistance);
      setShortestSide(routeCoord);
    }
    //console.log(minDistance);
  }
  function getShortestLength(route) {
    route.forEach(compareLoc);
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      linesToRender.forEach((line) => {
        // get all coords for one line
        const coords = getCoordinates(
          line[0].latitude,
          line[0].longitude,
          line[1].latitude,
          line[1].longitude,
          15 // distance in meters
        );
        // just for debug
        setTest(
          coords.map((c) => {
            return { latitude: c[0], longitude: c[1] };
          })
        );
        setPolyLines((oldVal) => [
          ...oldVal,
          {
            coordinates: coords.map((c) => {
              return { latitude: c[0], longitude: c[1] };
            }),
            id: oldVal.length + 1,
            strokeColor: "#000",
          },
        ]);
        // setTest(
        //   (oldVal) => [...oldVal, ...coords.map((c) => {
        //     return { lat: c[0], long: c[1] };
        //   })]
        // );
      });
    })();
  }, []);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <NativeBaseProvider>
      <View>
        <View style={{ position: "absolute", marginTop: 80 }}>
          <Entypo
            onPress={() => navigation.navigate("MapPage")}
            style={[styles.IconStyle]}
            name="chevron-left"
            size={30}
            color="#420F0F"
          />
        </View>
        <View
          style={{
            marginTop: 96,
            flexDirection: "row",
            // display: "flex",
            justifyContent: "center",
            // backgroundColor: "blue",
            // position: "absolute",
          }}
        >
          <View
            style={
              {
                // marginTop: 22
              }
            }
          >
            <Text style={styles.Textheading}>ROUTE SCHEDULES NEAR</Text>
            {/* <Text style={styles.Textbody}>
              3655 S Grand Ave #220,{"\n"} Los Angeles, CA 90007
            </Text> */}
            <Text style={styles.Textbody}>
              3655 S GRAND AVE #220,{"\n"} LOS ANGELES, CA 90007
            </Text>
          </View>
        </View>
        <View
          style={
            {
              // backgroundColor: "red",
              // width: 200,
              // height: 100,
              // alignSelf: "center",
              // paddingBottom: 56,
              // borderWidth: 100,
              // height: 567,
              // width: 354,
            }
          }
        >
          {/* <Text style = {{height: 50}}> Time tao find out </Text> */}
          {location === null ? null : (
            <MapView
              provider={PROVIDER_GOOGLE}
              customMapStyle={mapStyle}
              // style={styles.map}
              initialRegion={{
                latitude: 34.017222,
                // latitude: location.coords.latitude,
                longitude: -118.278205,
                // longitude: location.coords.longitude,
                latitudeDelta: LATITUDE_DELTA, //0.0035,
                longitudeDelta: LONGITUDE_DELTA, //0.0095,
              }}
              style={styles.MapViewstyle}
              pitchEnabled={false}
              rotateEnabled={false}
              zoomEnabled={false}
              scrollEnabled={true}
            >
              <Marker
                coordinate={{
                  latitude: 34.017222,
                  longitude: -118.278205,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                draggable
                onDragEnd={(e) => {
                  const newCoord = e.nativeEvent.coordinate;
                  // update marker location
                  setMarkerLocation(newCoord);
                  const distances = [];
                  polyLines.forEach((line, i) => {
                    distances.push({ lineId: line.id, distance: 0 });
                    line.coordinates.forEach((coord, j) => {
                      let curDistance = Math.sqrt(
                        Math.pow(newCoord.latitude - coord.latitude, 2) +
                          Math.pow(newCoord.longitude - coord.longitude, 2)
                      );
                      // if first coord in line
                      if (j === 0) {
                        distances[i].distance = curDistance;
                      } else if (distances[i].distance > curDistance) {
                        distances[i].distance = curDistance;
                      }
                    });
                  });
                  console.log(distances);
                  const sorted = distances.sort(
                    (a, b) => a.distance - b.distance
                  );
                  const id = sorted[0].lineId;
                  console.log(id);
                  setPolyLines(
                    polyLines.filter((line) => {
                      if (line.id === id) {
                        line.strokeColor = "#ff0000";
                      } else {
                        line.strokeColor = "#000";
                      }
                      return line;
                    })
                  );
                }}
                // icon={require("../assets/test.png")}
                rotation={0}
              />
              {/* {test.map((t, i) => (
                <Marker
                  key={i}
                  coordinate={{
                    latitude: t.latitude,
                    longitude: t.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
              ))} */}
              {polyLines.map((line) => (
                <Polyline
                  key={line.id}
                  coordinates={line.coordinates}
                  strokeColor={line.strokeColor} // fallback for when `strokeColors` is not supported by the map-provider
                  strokeWidth={1}
                />
              ))}
            </MapView>
          )}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("RoutesPage")}
          style={styles.OuterView}
        >
          <View style={styles.TimerViewStyle}>
            <Text style={styles.Timer}>Set Alarm</Text>
          </View>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  MapViewstyle: {
    height: 567,
    width: 354,
    // flex: 1,
    alignSelf: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 19,
  },
  Textheading: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
    // backgroundColor: "red",
    fontFamily: "RobotoCondensedbold",
    // letterSpacing: 1,
  },
  Textbody: {
    color: "black",
    textAlign: "center",
    fontSize: 22,
    marginTop: 9,
    fontWeight: "500",
    fontFamily: "RobotoCondensedregular",
    // backgroundColor: "green",
  },
  Viewstyle: {
    backgroundColor: "#902E2E",
    width: 349,
    height: 110,
    borderWidth: 2,
    borderRadius: 9,
    marginTop: 100,
    padding: 5,
    flexDirection: "row",
    borderColor: "#902E2E",
    backgroundColor: "red",
  },
  TimerViewStyle: {
    backgroundColor: "#902E2E",
    width: 253,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 95,
    // padding: 5,
    // flexDirection: "row",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
  OuterView: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
    // width: 50,
    // height: 50,
    flex: 1,
  },
  IconView: {
    width: 25,
    height: "100%",
    justifyContent: "flex-start",
    // alignSelf: "center",
    // alignItems: "flex-end",
  },
  headerstyle: {
    fontSize: 22,
    color: "white",
  },
  subHeaderStyle: {
    fontSize: 15,
  },
  content: {
    fontSize: 20,
  },
  Timer: {
    letterSpacing: 5,
    color: "white",
    justifyContent: "center",
    textAlign: "center",
  },
  IconStyle: {
    // right: 26
    // backgroundColor: "yellow",
    // position: "absolute",
    marginHorizontal: 28,
    // backgroundColor: "yellow",
  },
});
// onPress={popup}