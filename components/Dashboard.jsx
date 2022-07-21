import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import MapPage from "./MapPage";

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
            <Text style={styles.boxestext}>Save An Adress</Text>
          </View>
        </View>
        <View style={styles.boxtext}>
          <View>
            <Text style={styles.boxestext}>View Current Alarms</Text>
          </View>
        </View>
        <View style={styles.boxtext}>
          <View>
            <Text style={styles.boxestext}>View Saved Adresses</Text>
          </View>
        </View>
        <View>
          <View style={styles.boxtext}>
            <View>
              <Text style={styles.boxestext}>Log Out</Text>
            </View>
          </View>
          <View style={styles.boxtext}>
            <View>
              <Text style={styles.boxestext}>SweepAlert</Text>
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
    backgroundColor: "red",
  },
  viewspacing: {
    marginTop: 60,
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
    // marginVertical: -100,
    // backgroundColor: 'blue',
    flexDirection: "column",
    color: "#591818",
    fontWeight: "bold",
    letterSpacing: 1,
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
    height: 50,
  },
  boxestext: {
    textAlign: "center",
  },
});
export default App;
