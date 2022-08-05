import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function App({ navigation }) {
  return (
    <View>
      <View style={styles.controller}>
        <View style={styles.headspacing}>
          <View style={styles.alignment}>
            <Text style={styles.Textheading}>ROUTE SCHEDULES NEAR</Text>
            <Text style={styles.Textbody}>
              3655 S Grand Ave #220,{"\n"} Los Angeles, CA 90007
            </Text>
          </View>
          <Entypo
            onPress={() => navigation.navigate("DetailedRoutes")}
            style={styles.IconStyle}
            name="chevron-left"
            size={30}
            color="#420F0F"
          />
        </View>
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("DetailedRoutes", {})}
        style={styles.OuterViewforboxes}
      > */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.Viewstyle}>
          <View
            style={{
              // borderBottomColor: "#3A3A3A",
              // backgroundColor: "red",
              // backgroundColor: "blue",
              // height: 0,
              // marginTop: 49.6,
              // borderBottomWidth: 1,
              alignSelf: "stretch",
              width: 2,
              height: 140,
              backgroundColor: "white",
              // color: "blue",
              position: "absolute",
              marginHorizontal: 107,

              // marginTop: 49.6,
              flex: 1,
              // width: 380.21,
              // alignItems: "center",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            {/* <Text style={styles.headerstyleone}>4am{"\n"} - 6:30am</Text> */}
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={styles.headerstyleone}>4:00</Text>
              <Text style={styles.headerstyleone}>AM</Text>
              <Text style={styles.headerstyleone}>-</Text>
              <Text style={styles.headerstyleone}>6:30</Text>
              <Text style={styles.headerstyleone}>AM</Text>
            </View>
            {/* <Text style={styles.headerstyletwo}>
             marginTop: 15,
            </Text> */}
            <View style={{ alignItems: "center", marginTop: 25 }}>
              <Text style={styles.headerstyletwo}>1ST & 3RD</Text>
              <Text style={styles.headerstyletwo}>TUESDAY OF</Text>
              <Text style={styles.headerstyletwo}>THE MONTH</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={{ alignItems: "center",}}>
        <View style={styles.Viewstyle}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={styles.headerstyleone}>4:00</Text>
                <Text style={styles.headerstyleone}>AM</Text>
                <Text style={styles.headerstyleone}>-</Text>
                <Text style={styles.headerstyleone}>6:30</Text>
                <Text style={styles.headerstyleone}>AM</Text>
              </View>
              <View
            style={{
              alignSelf: "stretch",
              width: 2,
              height: 140,
              backgroundColor: "white",
              position: "absolute",
              marginHorizontal: 107,
              flex: 1,
            }}
          />
              <View style={{ alignItems: "center", marginTop: 5, }}>
                <Text style={styles.headerstylethree}> 2nd & 4th</Text>
                <Text style={styles.headerstylethree}>WEDNESDAY</Text>
                <Text style={styles.headerstylethree}>OF THE</Text>
                <Text style={styles.headerstylethree}>MONTH</Text>
              </View>
            </View>
          </View>
        </View>
        </View> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("MapPage")}
        style={styles.OuterView}
      >
        <View style={styles.TimerViewStyle}>
          <Text style={styles.Timer}>confirm alarm</Text>
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
  OuterView: {
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
    // width: 50,
    // height: 50,
    flex: 1,
  },
  TimerViewStyle: {
    backgroundColor: "#902E2E",
    width: 253,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 430,
    // padding: 5,
    // flexDirection: "row",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
  Timer: {
    letterSpacing: 2,
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Robotomid",
    fontWeight: "500",
  },
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
    // letterSpacing: 1,
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
  Viewstyletwo: {
    marginTop: 77,
    backgroundColor: "#902E2E",
    // backgroundColor: "blue",
    width: 349,
    height: 140,
    // borderWidth: 2,
    borderRadius: 9,
    // marginTop: 100,
    // padding: 5,
    // position: "absolute",
    // flexDirection: "row",
    borderColor: "#902E2E",
  },
  Viewstyle: {
    marginTop: 77,
    backgroundColor: "#902E2E",
    // backgroundColor: "blue",
    width: 349,
    height: 140,
    // borderWidth: 2,
    borderRadius: 9,
    // marginTop: 100,
    // padding: 5,
    // position: "absolute",
    // flexDirection: "row",
    borderColor: "#902E2E",
  },
  OuterViewforboxes: {
    // justifyContent: "center",
    alignItems: "center",
    // padding: -50,
    // marginBottom: -36,
    // marginBottom: 150,
    // marginVertical: 100,
  },
  headerstyleone: {
    fontSize: 20,
    // width: 63,
    // height: 120,
    color: "white",
    fontFamily: "RobotoCondensedbold",
    // flexDirection: "column",
    // backgroundColor: "blue",
    marginHorizontal: 34,
    // marginHorizontal: 1,
    // backgroundColor: "blue",
    // marginTop: 15,
  },
  headerstylethree: {
    fontSize: 28,
    color: "white",
    letterSpacing: 5,
    // backgroundColor: "blue",
    marginHorizontal: 33,
    fontFamily: "RobotoCondensedregular",
    // alignSelf: "flex-end",
    // marginHorizontal: 129,
    // flexWrap: "nowrap",
    // flexDirection: "column",
    // width: 197,
    // height: 99,
    // marginTop: 25,
    // marginHorizontal: 48,
    // backgroundColor: "red",
    // alignSelf: "flex-end",
  },
  headerstyletwo: {
    fontSize: 28,
    color: "white",
    letterSpacing: 5,
    // backgroundColor: "blue",
    marginHorizontal: 21,
    fontFamily: "RobotoCondensedregular",
    // alignSelf: "flex-end",
    // marginHorizontal: 129,
    // flexWrap: "nowrap",
    // flexDirection: "column",
    // width: 197,
    // height: 99,
    // marginTop: 25,
    // marginHorizontal: 48,
    // backgroundColor: "red",
    // alignSelf: "flex-end",
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
