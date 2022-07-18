import React from "react";
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
} from "react-native";

// function popup () {
//     console.log(this is working)
// },
export default function App({ navigation }) {
  return (
    <SafeAreaView>
      <Text style={styles.Textheading}>Route Schedules Near</Text>
      <Text style={styles.Textbody}>
        3655 S Grand Ave #220,{"\n"} Los Angeles, CA 90007
      </Text>
      <View style={styles.OuterView}>
        <View style={styles.Viewstyle}>
          <View>
            <Text>Thursday</Text>
            <Text>4am - 6:30am</Text>
            <Text>2nd & 4th friday of the month</Text>
          </View>
          <View style={styles.IconView}>
            <Entypo  name="chevron-right" size={30} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    color: "#902E2E",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
  },
  Textbody: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "250",
  },
  Viewstyle: {
    backgroundColor: "#902E2E",
    width: 349,
    height: 90,
    borderWidth: 2,
    borderRadius: 9,
    marginTop: 100,
    padding: 5,
    flexDirection: 'row',
  },
  OuterView: {
    justifyContent: "center",
    alignItems: "center",
  },
  IconView: {
    width: 25,
    height: '100%',
    margin: 110,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems:'flex-start',
  },
});
// onPress={popup}