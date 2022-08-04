import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const App = ({ navigation }) => {
  return (
    <View style={styles.flexstyle}>
      <View style={styles.ViewStyle}>
        <Entypo
          onPress={() => navigation.navigate("MapPage")}
          style={styles.arrowstyle}
          name="chevron-left"
          size={30}
          color="#420F0F"
        />
      </View>

      <Text style={styles.DashStyle}>CURRENT ALARMS</Text>
      <View style={styles.alignment}>
        <View style={styles.boxstyle}>
          <Text style={styles.boxtext}>
          3655 S Grand Ave #220, Los Angeles, CA 90007
            </Text>
            <Entypo style={{position: "absolute", marginHorizontal: 165, zIndex: 2,}} name="chevron-up" size={24} color="white" />
        </View>
        {/* <Text style={styles.boxtext}>you have no current alarms :(</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    // flexDirection: "row",
    // marginVertical: 80,
    // backgroundColor: "red",
  },
  viewspacing: {
    marginTop: 22,
  },
  flexstyle: {
    flex: 1,
    // marginVertical: -10,
    flexDirection: "column",
    // backgroundColor: "red",

  },
  alignment: {
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    // flexDirection: "row",
    // backgroundColor: "yellow",
  },
  boxstyle: {
    // position: "absolute",
    // zIndex: 2,
    borderRadius: 10,
    width: 349,
    height: 110,
    marginTop: 110,
    backgroundColor: "#902E2E",
    justifyContent: "center",

  },
  DashStyle: {
    // backgroundColor: "blue",
    position: "absolute",
    zIndex: 1,
    width: 210,
    height: 29,
    marginTop: 102,
    textAlign: "center",
    alignSelf: "center",
    // justifyContent: "center",
    fontSize: 25,
    // marginHorizontal: 50,
    // marginTop: -96,
    // marginBottom: 25,
    // backgroundColor: 'blue',
    color: "black",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "RobotoCondensedbold", //"RobotoCondensed_700Bold",
  },
  arrowstyle: {
    // marginVertical: 10,
    marginHorizontal: 19,
    // marginTop: 80,
    color: "#591818",
    height: 30,
    width: 30,
    // backgroundColor: 'green',
    marginTop: 80,
  },
  boxtext: {
    // alignSelf: "center",
    fontSize: 22,
    marginHorizontal: 20,
    fontWeight: "500",
    // position: "absolute",
    color: "white",
    fontFamily: "RobotoCondensedregular",
    // textAlign: "center",
    backgroundColor: "black",
    // borderWidth: ,
    fontFamily: "RobotoCondensedlight" //RobotoCondensed_300Light",
  },
  formattingone: {
    color: "black",
    fontSize: 20,
    letterSpacing: 4,
    // fontFamily: "Roboto",//"RobotoMono_600SemiBold",
    marginTop: 15,
  },
  formattingtwo: {
    color: "#902E2E",
    fontSize: 20,
    letterSpacing: 4,
    // fontFamily: "Roboto", //"RobotoMono_600SemiBold",
  },
  minilogostyle: {
    alignSelf: "center",
    // fontFamily: "Roboto",
  },
  boxestext: {
    textAlign: "center",
    color: "white",
    fontFamily: "Robotomid", //"Roboto_500Medium",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default App;
