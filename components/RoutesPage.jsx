import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
// function popup () {
//     console.log(this is working)
// },
export default function App({ navigation }) {
  return (
    <View>
      <View style={styles.controller}>
        <View style={styles.headspacing}>
          <View style={styles.alignment}>
            <Text style={styles.Textheading}>Route Schedules Near</Text>
            <Text style={styles.Textbody}>
              3655 S Grand Ave #220,{"\n"} Los Angeles, CA 90007
            </Text>
          </View>
          <Entypo
            onPress={() => navigation.navigate("MapPage")}
            style={styles.IconStyle}
            name="chevron-left"
            size={30}
            color="#420F0F"
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("DetailedRoutes", {})} style={styles.OuterViewforboxes}>
        <View style={styles.Viewstyle}>
          <View>
            <Text style={styles.headerstyle}>Thursday</Text>
            <Text style={styles.headerstyle}>4am - 6:30am</Text>
            <Text style={styles.headerstyle}>
              2nd & 4th Thursday of the month
            </Text>
            {/* <View style={[styles.IconView, styles.IconViewone]}>
              <Entypo
                onPress={() =>
                  navigation.navigate("DetailedRoutes", {
                    day: "Thursday",
                    time: "4am - 6:30am",
                    frequency: "2nd & 4th Thursday of the month",
                  })
                }
                name="chevron-right"
                size={30}
                color="black"
              />
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DetailedRoutes", {})} style={styles.OuterViewforboxes}>
        <View
          style={styles.Viewstyle}
        >
          <View>
            <Text style={styles.headerstyle}>Friday</Text>
            <Text style={styles.headerstyle}>4am - 6:30am</Text>
            <Text style={styles.headerstyle}>
              2nd & 4th friday of the month
            </Text>
            {/* <View style={styles.IconView}>
              <Entypo
                onPress={() =>
                  navigation.navigate("DetailedRoutes", {
                    day: "Friday",
                    time: "4am - 6:30am",
                    frequency: "2nd & 4th Friday of the month",
                  })
                }
                name="chevron-right"
                size={30}
                color="black"
              />
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  //   input: {
  //     height: 40,
  //     margin: 12,
  //     borderWidth: 1,
  //     padding: 10,
  //   },

  headspacing: {
    // flexDirection: "row",
  },
  IconStyle: {
    // backgroundColor: "purple",
    position: "absolute",
    // flexDirection: "column",
    flexDirection: "row",
    // justifyContent: "flex-start",
    marginTop: 80,
    marginHorizontal: 19,
    // marginVertical: 10,
  },
  changeone: {
    // flexDirection: "row",
    // backgroundColor: "blue",
    marginTop: 50,
  },
  alignment: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 102,
    // marginVertical: 102,

  },
  Textheading: {
    // flexDirection: "column",
    color: "black",
    // backgroundColor: "yellow",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 25,
    letterSpacing: 1,
    // marginBottom: 10,
    // marginTop: 50,
    fontFamily: "RobotoCondensedbold",
  },
  Textbody: {
    // backgroundColor: "red",
    // flexDirection: "column",
    color: "black",
    textAlign: "center",
    fontSize: 22,
    // fontWeight: "300",
  },
  IconViewone: {
    width: 25,
    height: "100%",
    // justifyContent: "flex-start",
    alignSelf: "center",
    alignItems: "flex-end",
    left: 160,
    bottom: 80,
  },
  Viewstyle: {
    marginTop: 77,
    backgroundColor: "#902E2E",
    width: 349,
    height: 110,
    borderWidth: 2,
    borderRadius: 9,
    // marginTop: 100,
    padding: 5,
    // flexDirection: "row",
    borderColor: "#902E2E",
  },
  OuterViewforboxes: {
    justifyContent: "center",
    alignItems: "center",
    // padding: -50,
    marginBottom: -36,
    // marginBottom: 150,
    // marginVertical: 100,
  },
  headerstyle: {
    fontSize: 22,
    color: "white",
    fontFamily: "Robotomid",
  },
  IconView: {
    width: 25,
    height: "100%",
    justifyContent: "flex-start",
    alignSelf: "center",
    alignItems: "flex-end",
    left: 180,
    bottom: 80,
  },
  subHeaderStyle: {
    fontSize: 15,
  },
  content: {
    fontSize: 20,
  },
});
