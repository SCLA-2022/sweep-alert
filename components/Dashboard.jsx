import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

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
      {/* {position: 'relative', left: 0} */}
      {/* style={styles.ViewStyle} */}
      <View style={{ marginTop: 86 }}>
        <Entypo
          onPress={() => navigation.navigate("MapPage")}
          style={styles.arrowstyle}
          name="chevron-left"
          size={30}
          color="#591818"
        />
        {/* , {position: 'relative', top: -30}  */}
        {/* style={styles.DashStyle} */}
        <Text style={styles.DashStyle}>DASHBOARD</Text>
      </View>
      <View style={styles.viewspacing}>
        <View style={styles.boxtext}>
          <View>
            <Text
              onPress={() => navigation.navigate("AddCarPage")}
              style={styles.boxestext}
            >
              Save An Address
            </Text>
          </View>
        </View>
        <View style={styles.boxtext}>
          <View>
            <Text
              onPress={() => navigation.navigate("SavedAddresses")}
              style={styles.boxestext}
            >
              View Saved Addresses
            </Text>
          </View>
        </View>
        <View style={styles.boxtext}>
          <View>
            <Text
              onPress={() => navigation.navigate("CurrentAlarms")}
              style={styles.boxestext}
            >
              View Current Alarms
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.downwardboxes}>
        <View style={styles.boxtext}>
          <View>
            <Text style={styles.boxestext}>Log Out</Text>
          </View>
        </View>
        <View style={styles.minilogostyle}>
          <View>
            <Text style={styles.formattingone}>
              SWEEP
              <Text style={styles.formattingtwo}>ALERT</Text>
            </Text>
          </View>
        </View>
      </View>

      {/* <View style = {{backgroundColor: 'blue'}}>
          <Text style = {{position: 'absolute', left: 0}}> Arrow place hodler</Text>
          <Text style = {{alignSelf: 'center', backgroundColor: 'red'}}> Does this work? </Text>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    flexDirection: "row",
    marginTop: 86,

    width: "100%",
    // backgroundColor: 'red',
    alignItems: "center",
    // marginVertical: 86,
    // backgroundColor: "red",
  },
  viewspacing: {
    // marginTop: 30,
    marginTop: 100,
  },
  flexstyle: {
    flex: 1,
    // marginVertical: -10,
  },
  downwardboxes: {
    // margin: 35,
    marginTop: 43,
  },
  DashStyle: {
    // textAlign: "center",
    // width: '100%',
    alignSelf: "center",
    // backgroundColor: 'yellow'
    // left: 90,
    // justifyContent: "center",
    fontSize: 40,
    // marginTop: -100,
    // marginBottom: 25,
    // backgroundColor: 'blue',
    color: "#420F0F",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "RobotoCondensedbold",
  },
  arrowstyle: {
    // marginVertical: 10,
    // alignSelf: 'center',
    color: "#000000",
    position: "absolute",
    top: 6,
    left: 25,
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
    margin: 20,
    width: 300,
    height: 75,
  },
  formattingone: {
    color: "black",
    fontSize: 32,
    letterSpacing: 5,
    fontFamily: "RobotoCondensedbold",
    // marginTop: 80,
  },
  formattingtwo: {
    color: "#902E2E",
    fontSize: 32,
    letterSpacing: 5,
    fontFamily: "RobotoCondensedbold",
  },
  minilogostyle: {
    alignSelf: "center",
    // marginTop: 100,
    // fontFamily: "Roboto",
    // marginTop: 50,
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
