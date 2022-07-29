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

export default function CustomCountDown() {
  const [totalDuration, setTotalDuration] = useState(100);

  useEffect(() => {
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss");
    //Getting the current date-time with required formate and UTC
    var expirydate = "2023-7-28 04:00:45"; //You can set your own date-time
    //Let suppose we have to show the countdown for above date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
  }, []);

  return (
    <CountDown
      style={styles.TimerStyleone}
      // until={totalDuration}
      until={60 * 10 + 30}
      //duration of countdown in seconds
      timeToShow={["D", "H", "M", "S"]}
      //formate to show
      onFinish={() => {}}
      // onFinish={() => alert("Finished")}

      //on Finish call
      onPress={() => {}}
      //on Press call
      size={30}
      digitStyle={{ backgroundColor: "#902E2E" }}
      digitTxtStyle={{ color: "white", marginTop: 30 }}
      timeLabels={{
        d: "Days",
        h: "Hours",
        m: "Minutes",
        s: "Seconds",
      }}
      timeLabelStyle={{ color: "black" }}
      // digitStyle={{
      //   backgroundColor: "#FFF",
      //   borderWidth: 2,
      //   borderColor: "#1CC625",
      // }}
      separatorStyle={{ color: "black" }}
      showSeparator
    />
  );
}
const styles = StyleSheet.create({

});