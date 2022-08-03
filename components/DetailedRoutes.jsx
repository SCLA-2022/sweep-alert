import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { NativeBaseProvider } from "native-base";
// import {mapvi}

// function popup () {
//     console.log(this is working)
// },
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

export default function App({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(route.params);

  return (
    <NativeBaseProvider>
      <View>
        <View
          style={{
            // marginTop: 80,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        >
          <Entypo
            onPress={() => navigation.goBack()}
            style={[styles.IconStyle]}
            name="chevron-left"
            size={30}
            color="#420F0F"
          />
          <View
            style={
              {
                /* marginTop: 22 */
              }
            }
          >
            <Text style={styles.Textheading}>Route Schedules Near</Text>
            <Text style={styles.Textbody}>
              3655 S Grand Ave #220,{"\n"} Los Angeles, CA 90007
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
              height: 567,
              width: 354,
            }
          }
        >
          {/* <Text style = {{height: 50}}> Time tao find out </Text> */}

          <MapView
            style={{ flex: 1 }}
            // provider={PROVIDER_GOOGLE}
            // customMapStyle={mapStyle}
            // style={styles.map}
            initialRegion={{
              latitude: 34.017222,
              // location.coords.latitude,
              longitude: -118.278205,
              // location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.MapViewstyle}
          ></MapView>
        </View>

        <View style={styles.OuterView}>
          <View style={styles.TimerViewStyle}>
            <Text style={styles.Timer}>Set Alarm</Text>
          </View>
        </View>
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
    alignSelf: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 25,
  },
  Textheading: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    // fontWeight: "500",
    backgroundColor: "red",
  },
  Textbody: {
    color: "black",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    fontFamily: "RobotoCondensedregular",
    backgroundColor: "green",
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
    width: 200,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    // marginTop: 1,
    // padding: 5,
    // flexDirection: "row",
    borderColor: "#902E2E",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
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
    // right: 26,
    // marginHorizontal: 28,
  },
});
// onPress={popup}
