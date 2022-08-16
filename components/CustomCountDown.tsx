import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
//import CountDown to show the timer
import CountDown from "react-native-countdown-component";

//import moment to help you play with date and time
import moment from "moment";

export default function CustomCountDown(expirydate) {
//   const [totalDuration, setTotalDuration] = useState(100);
    let duration = 100

//   useEffect(() => {
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    var date = moment().utcOffset('-07:00').format('YYYY-MM-DD hh:mm:ss');
    console.log(expirydate);
    console.log(date);
    //Getting the current date-time with required formate and UTC
     //You can set your own date-time


    // console.log(date.add(5, 'hours'))
    //Let suppose we have to show the countdown for above date-time
    var diffr = moment.duration(moment(expirydate.expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    duration = hours * 60 * 60 + minutes * 60 + seconds
    console.log('inside:', duration)
    // setTotalDuration() = ;
    //converting in seconds
    // setTotalDuration(d);
    // setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
//   }, []);
  console.log( 'Outside', duration)
  return (
    <CountDown
      style={styles.TimerStyleone}
      until={parseInt(duration)}
      timeToShow={["D" ,"H", "M", "S"]}
      size={48}
      digitStyle={{ margin: 0, padding: 0, height: 100, width: 65 }}
      digitTxtStyle={{ color: "white", padding: 0, fontSize: 48,}}
      timeLabels={{
        d: "",
        h: "",
        m: "",
        s: "",
      }}

      separatorStyle={{ color: "white", padding: 0,}}
        showSeparator
    />
  );
}
const styles = StyleSheet.create({
//   TimerStyleone: {
//     // marginBottom: 50,
//     // marginVertical: 40,
//     // backgroundColor: "red",
//   },
});
