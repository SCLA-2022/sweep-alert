// React Native CountDown Timer | react-native-countdown-component
// https://aboutreact.com/react-native-countdown-timer/
 
// import React in our code
import React, {useState, useEffect} from 'react';
 
// import all the components we are going to use
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
 
// import CountDown to show the timer
import CountDown from 'react-native-countdown-component';
 
// import moment to help you play with date and time
import moment from 'moment';
 
const App = () => {
  const [totalDuration, setTotalDuration] = useState(0);
 
  useEffect(() => {
    // Coundown timer for a given expiry date-time
    let date = 
      moment()
        .utcOffset('+05:30')
        .format('YYYY-MM-DD hh:mm:ss');
    
    // Getting the current date-time
    // You can set your own date-time
    let expirydate = '2020-12-23 04:00:45';
    
    let diffr = 
      moment
        .duration(moment(expirydate)
        .diff(moment(date)));
    // Difference of the expiry date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
 
    // Converting in seconds
    var d = hours * 60 * 60 + minutes * 60 + seconds;
 
    // Settign up the duration of countdown
    setTotalDuration(d);
  }, []);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native CountDown Timer | 
          react-native-countdown-component
        </Text>
        <CountDown
          until={totalDuration}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
      </View>
    </SafeAreaView>
  );
};
 
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});