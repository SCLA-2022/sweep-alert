import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AddCarPage from "./AddCarPage"
import CurrentAlarms from "./CurrentAlarms"
import SavedAddresses from "./SavedAddresses"
import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  } from "@expo-google-fonts/roboto";
// const Header = () => (
//   <View style={styles.ViewStyle}>
//     <Entypo
//       onPress={() => navigation.navigate("MapPage")}
//       style={styles.arrowstyle}
//       name="chevron-left"
//       size={30}
//       color="black"
//     />
//     <Text style={styles.DashStyle}>DASHBOARD</Text>
//   </View>
// );
const App = ({ navigation }) => {
  return (
    <View style={styles.flexstyle}>
      <View style={styles.ViewStyle}>
        <Entypo
          onPress={() => navigation.navigate("MapPage")}
          style={styles.arrowstyle}
          name="chevron-left"
          size={30}
          color="black"
        />
      </View>
      <Text style={styles.DashStyle}>DASHBOARD</Text>
      <View style={styles.viewspacing}>
        
        <View style={styles.boxtext}>
          <View>
            <Text onPress={() => navigation.navigate("AddCarPage")} style={styles.boxestext}>Save An Addresses</Text>
          </View>
        </View>
        <View style={styles.boxtext}>
          <View>
            <Text onPress={() => navigation.navigate("SavedAddresses")} style={styles.boxestext}>View Saved Addresses</Text>
          </View>
        </View>
        <View style={styles.boxtext}>
          <View>
            <Text onPress={() => navigation.navigate("CurrentAlarms")} style={styles.boxestext}>View Current Alarms</Text>
          </View>
        </View>
        
        <View>
          <View style={styles.boxtext}>
            <View>
              <Text style={styles.boxestext}>Log Out</Text>
            </View>
          </View>
          <View style={styles.minilogostyle}>
            <View>
              <Text style={styles.formattingone}>SWEEP
              <Text style={styles.formattingtwo}>
              ALERT</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    flexDirection: "row",
    marginVertical: 55,
    // backgroundColor: "red",
  },
  viewspacing: {
    marginTop: 30,
  },
  flexstyle: {
    flex: 1,
    // marginVertical: -10,
  },
  downwardboxes: {
    margin: 10,
  },
  DashStyle: {
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 35,
    marginHorizontal: 50,
    marginTop: -100,
    marginBottom: 25,
    // backgroundColor: 'blue',
    color: "#591818",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "RobotoCondensed_700Bold",
  },
  arrowstyle: {
    marginVertical: 10,
    color: "#591818",
    // backgroundColor: 'yellow',
  },
  boxtext: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#902E2E",
    padding: 10,
    // overflow: "hidden",
    // borderWidth: ,
    borderRadius: 10,
    margin: 10,
    width: 300,
    height: 75,
  },
  formattingone: {
    color: "black",
    fontSize: 20,
    letterSpacing: 4,
    fontFamily:'RobotoMono_600SemiBold',
    marginTop: 15,
  },
  formattingtwo: {
    color: "#902E2E",
    fontSize: 20,
    letterSpacing: 4,
    fontFamily:'RobotoMono_600SemiBold',
  },
  minilogostyle: {
    alignSelf: "center",
    // fontFamily: "Roboto",
  },
  boxestext: {
    textAlign: "center",
    color: "white",
    fontFamily: "Roboto_500Medium",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default App;