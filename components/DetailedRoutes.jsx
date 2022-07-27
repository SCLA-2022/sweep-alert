import React, {useState} from "react";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
  Modal,
} from "react-native";

// function popup () {
//     console.log(this is working)
// },
export default function App({ navigation,route }) {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(route)

  return (
    <View>
        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      > */}
      <Text style={styles.Textheading}>Route Schedules Near</Text>
      <Text style={styles.Textbody}>
        3655 S Grand Ave #220,{"\n"} Los Angeles, CA 90007
      </Text>
      <View style={styles.OuterView}>
        <View style={styles.Viewstyle}>
          <View>
            <Text style={styles.headerstyle}>{route.params.day}</Text>
            <Text style={styles.headerstyle}>{route.params.time}</Text>
            <Text style={styles.headerstyle}>
             {route.params.frequency}
            </Text>
          </View>
          {/* <View style={styles.IconView}>
            <Entypo name="chevron-right" size={30} color="black" />
          </View> */}
        </View>
      </View>
      <View style={styles.OuterView}>
        <View style={styles.TimerViewStyle}>
          <Text style={styles.Timer}>Set Alarm</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Textheading: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
    // fontWeight: "500",
  },
  Textbody: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
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
  },
  TimerViewStyle: {
    backgroundColor: "#902E2E",
    width: 200,
    height: 60,
    borderWidth: 2,
    borderRadius: 9,
    marginTop: 250,
    padding: 5,
    flexDirection: "row",
    borderColor: "#902E2E",
    justifyContent: "center",
    alignItems: "center",
  },
  OuterView: {
    justifyContent: "center",
    alignItems: "center",
  },
  IconView: {
    width: 25,
    height: "100%",
    justifyContent: "flex-start",
    // alignSelf: "center",
    alignItems: "flex-end",
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
});
// onPress={popup}
