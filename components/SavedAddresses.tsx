import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const App = ({ navigation }) => {
  return (
    <View style={styles.flexstyle}>
      <View style={styles.ViewStyle}>
        <Entypo
          onPress={() => navigation.navigate("Dashboard")}
          style={styles.arrowstyle}
          name="chevron-left"
          size={30}
          color="black"
        />
      </View>
      <Text style={styles.DashStyle}>SAVED ADDRESSES</Text>
      <View style={styles.alignment}>
        <Text style={styles.boxtext}>you have no saved addresses :</Text>
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
  alignment: {
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    flexDirection: "row",
  },
  DashStyle: {
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    marginHorizontal: 50,
    marginTop: -96,
    marginBottom: 25,
    // backgroundColor: 'blue',
    color: "#591818",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "RobotoCondensedbold",
  },
  arrowstyle: {
    marginVertical: 10,
    marginHorizontal: 15,
    color: "#591818",
    // backgroundColor: 'yellow',
  },
  boxtext: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    marginTop: 175,
    textAlign: "center",
    // backgroundColor: "#902E2E",
    // borderWidth: ,
    fontFamily: "RobotoCondensedlight"
  },
  formattingone: {
    color: "black",
    fontSize: 20,
    letterSpacing: 4,
    // fontFamily: "RobotoMono_600SemiBold",
    marginTop: 15,
  },
  formattingtwo: {
    color: "#902E2E",
    fontSize: 20,
    letterSpacing: 4,
    // fontFamily: "RobotoMono_600SemiBold",
  },
  minilogostyle: {
    alignSelf: "center",
    // fontFamily: "Roboto",
  },
  boxestext: {
    textAlign: "center",
    color: "white",
    fontFamily: "Robotomid",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default App;
