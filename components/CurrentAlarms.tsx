import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import CustomCountDown from "./CustomCountDown.jsx";

const App = ({ navigation }) => {
  const [show, setShow] = React.useState();
  const [curModalVisible, setCurModalVisible] = useState(false);

  return (
    <View style={styles.flexstyle}>
      <View style={{ position: "absolute", zIndex: 5 }}>
        <Entypo
          onPress={() => navigation.navigate("MapPage")}
          style={styles.arrowstyle}
          name="chevron-left"
          size={30}
          color="#420F0F"
        />
        {/* <Entypo name="chevron-up" size={24} color="black" /> */}
      </View>

      <Text style={styles.DashStyle}>CURRENT ALARMS</Text>
      <View style={styles.alignment}>
        <View style={styles.boxstyle}>
          <Text style={styles.boxtext}>
            3655 S Grand Ave #220, Los {"\n"}Angeles, CA 90007
          </Text>
          <Entypo
            onPress={() => {
              setShow(!show);
              // setShow(false);

            }}
            style={styles.chevronupstyle}
            name="chevron-down"
            size={20}
            color="white"
          />
          {show ? (
            // <Modal
            //   animationType="slide"
            //   transparent={true}
            //   visible={curModalVisible}
            //   // onRequestClose={() => {
            //   //   Alert.alert("Modal has been closed.");
            //   //   // navigation.navigate("Dashboard");
            //   //   setCurModalVisible(false);
            //   // }}
            // >
              <View style={styles.centeredView}>
                {/* opacity={0.86}  */}
                <View
                  style={[
                    styles.modalView,
                    { backgroundColor: "#902E2E" },
                  ]}
                >
                  <Text style={styles.modalText}>
                  3655 S GRAND AVE #220, {"\n"}  LOS ANGELES, CA, 90007
                  </Text>
                  <Text style={styles.modalTexttwo}>
                    TUESDAY, 4 AM - 6:30 AM, 1ST AND 3RD TUES. OF THE MONTH
                  </Text>
                  <Text style={styles.modalTextthree}>Countdown </Text>
                  <View>
                    <CustomCountDown expirydate={"2022-08-16 04:00:00"} />
                  </View>
                  <Text style={styles.timeLabelStyle}>DAYS HR MIN SEC</Text>
                  <TouchableOpacity style={styles.setAlarmbutton}>
                    <View>
                      <Text style={styles.setalarmtext}>Cancel Alarm</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            // </Modal>
          ) : null}
        </View>
        {/* <Text style={styles.boxtext}>you have no current alarms :(</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexstyle: {
    flex: 1,
    // marginVertical: -10,
    // flexDirection: "column",
    // backgroundColor: "red",
    // overflow: "hidden",
  },
  ViewStyle: {
    // flexDirection: "row",
    // marginVertical: 80,
  },
  arrowstyle: {
    // marginVertical: 10,
    marginHorizontal: 19,
    position: "absolute",
    zIndex: 3,
    // marginTop: 80,
    color: "#591818",
    height: 30,
    width: 30,
    // backgroundColor: "yellow",
    marginTop: 80,
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
    // color: "black",
    fontWeight: "700",
    fontFamily: "RobotoCondensedbold", //"RobotoCondensed_700Bold",
  },

  alignment: {
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    // flexDirection: "row",
    // backgroundColor: "yellow",
    // backgroundColor: 'green',
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  boxstyle: {
    // position: "absolute",
    // zIndex: 2,
    borderRadius: 10,
    width: 349,
    height: 110,
    marginTop: 220,
    backgroundColor: "#902E2E",
    // justifyContent: "center",
  },

  boxtext: {
    // alignSelf: "center",
    fontSize: 22,
    marginHorizontal: 20,
    marginTop: 29,
    fontWeight: "500",
    // position: "absolute",
    color: "white",
    // fontFamily: "RobotoCondensedregular",
    // textAlign: "center",
    // backgroundColor: "black",
    // borderWidth: ,
    // fontFamily: "RobotoCondensedlight", //RobotoCondensed_300Light",
    // width: 311,
    // height: 100,
  },
  chevronupstyle: {
    position: "absolute",
    // marginHorizontal: 200,
    // alignSelf: "flex-end",
    width: 24,
    height: 24,
    // backgroundColor: "blue",
    marginVertical: 76,
    marginLeft: 311,
    // paddingHorizontal: 100,
    justifyContent: "flex-start",
    // alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 277,
    // marginTop: 97,
    // backgroundColor: "blue",
  },
  modalView: {
    // margin: 15,
    backgroundColor: "#420F0F",
    borderRadius: 20,
    width: 349,
    height: 510,
    // padding: 0,
    marginTop: 563,
    // width: "95%",
    alignItems: "center",
    // justifyContent: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
  },
  modalText: {
    // marginBottom: 15,
    // marginVertical: 50,
    // bottom: 75,
    // margin
    // marginTop: 50,
    // marginBottom: 58,
      marginTop: 68,
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
  modalTexttwo: {
    fontSize: 10,
    color: "white",
    // bottom: 50,
    marginTop: 7,
  },
  modalTextthree: {
    fontSize: 20,
    color: "white",
    marginTop: 37,
    // bottom: 50,
  },
  timeLabelStyle: {
    fontSize: 16,
    color: "white",
  },
  setAlarmbutton: {
    alignItems: "center",
    backgroundColor: "#420F0F",
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    width: 278,
    height: 60,
    marginTop: 59,
    // opacity={0.86},
    // opacity: 1,
    fontFamily: "Roboto",
  },
  setalarmtext: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 5,
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
