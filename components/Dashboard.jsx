import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const App = () => {

    return (
        <View style={styles.ViewStyle}>
            <Entypo onPress={() => navigation.navigate("MapPage")}
            style={styles.arrowstyle} name="chevron-left" size={30} color="black" />
        <Text style={styles.DashStyle}>
            DASHBOARD
            </Text>
            </View>
    );
  };

const styles = StyleSheet.create({
    ViewStyle: {
        flexDirection: "row",
        marginVertical: 86,
        // backgroundColor: 'red',

    },
    DashStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 35,
        marginHorizontal: 50,
        // marginVertical: 90,
        // backgroundColor: 'blue',
        flexDirection: "column",
        color: "#591818",
        fontWeight: "bold",
        letterSpacing: 1,
    },
    arrowstyle: {
        marginVertical: 5,
        color: "#591818",
        // backgroundColor: 'yellow',

    },
  });
  
  export default App;