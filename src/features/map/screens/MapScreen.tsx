import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import CustomCountDown from "../../../../components/CustomCountDown";
import { MaterialIcons } from "@expo/vector-icons";

import { NativeBaseProvider } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Map from "../components/Map";
const GOOGLE_PLACES_API_KEY = "AIzaSyBxUMsP-Bl2NGRTU32nkCEkG13EbYekCDU";

/**
 * @param param0 
 * @returns 
 */
export default function App({ navigation }: {navigation:any}) {

  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [curModalVisible, setCurModalVisible] = useState(false);
  const [search, setSearch] = React.useState("");
  const [show, setShow] = React.useState();

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["15%", "25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index:number) => {
    console.log("handleSheetChanges", index);
  }, []);


  return (
    <NativeBaseProvider>
      {/* {renderSearchBar()} */}

      <View style={styles.container}>
        {/* render map */}
         <Map />

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "#902E2E" }}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <View style={styles.ViewStyle}>
              <Text style={styles.titleText}>Your Current Location</Text>
              <Text style={styles.baseText}>
                3655 S Grand Ave #220,{"\n"}Los Angeles, CA 90007
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <AntDesign
                onPress={() => navigation.navigate("DetailedRoutes")}
                name="plus"
                size={30}
                color="white"
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={curModalVisible}
                // onRequestClose={() => {
                //   Alert.alert("Modal has been closed.");
                //   // navigation.navigate("Dashboard");
                //   setCurModalVisible(false);
                // }}
              >
                <View style={styles.centeredView}>
                  {/* opacity={0.86}  */}
                  <View
                    style={[
                      styles.modalView,
                      { backgroundColor: "rgba(66, 15, 15, 0.86)" },
                    ]}
                  >
                    <Text style={styles.modalText}>
                    3655 S Grand Ave #220,{"\n"}Los Angeles, CA 90007                    </Text>
                    <Text style={styles.modalTexttwo}>
                      TUESDAY, 4 AM - 6:30 AM, 1ST AND 3RD TUES. OF THE MONTH
                    </Text>
                    <AntDesign
                      style={styles.AntStyle}
                      onPress={() => {
                        setCurModalVisible(false);
                        console.log("Modal has been closed.");
                        // setShow(false);
                        navigation.navigate("MapPage");
                      }}
                      name="close"
                      size={30}
                      color="white"
                    />
                    <Text style={styles.modalTextthree}>Countdown </Text>
                    <View>
                      <CustomCountDown expirydate={"2022-08-16 04:00:00"} />
                    </View>
                    <Text style={styles.timeLabelStyle}>DAYS HR MIN SEC</Text>
                    <TouchableOpacity 
                        onPress={() => {
                          setCurModalVisible(false);
                        }}
                    style={styles.setAlarmbutton}>
                      <View>
                        <Text style={styles.setalarmtext}>Cancel Alarm</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </BottomSheet>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  TimerStyleone: {
    // marginBottom: 50,
    marginVertical: 40,
    // backgroundColor: "red",
  },
  setalarmtext: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 5,
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
  timeLabelStyle: {
    fontSize: 16,
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 277,
    marginTop: 97,
    // backgroundColor: "blue",
  },
  AntStyle: {
    flexDirection: "row",
    alignSelf: "flex-start",
    position: "absolute",
    margin: 10,
  },
  modalView: {
    // margin: 15,
    backgroundColor: "#420F0F",
    borderRadius: 20,
    width: 379,
    height: 561,
    padding: 0,
    // width: "95%",
    alignItems: "center",
    // justifyContent: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
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
  modalText: {
    // marginBottom: 15,
    // marginVertical: 50,
    // bottom: 75,
    // margin
    // marginTop: 50,
    // marginBottom: 58,
    marginTop: 77,
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 5,
    backgroundColor: "black",
  },
  // buttonClose: {
  //   backgroundColor: "#902E2E",
  // },
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  magnifyingstyle: {
    // alignSelf: 'flex-end',
    // top: 100,
    backgroundColor: "#902E2E",
    // padding: 50,
  },
  ellipsefour: {
    alignItems: "flex-end",
    width: 50,
    height: 50,
    left: 372,
    top: 177,
    background: "#912E2E",
  },
  dotsstyle: {
    backgroundColor: "#902E2E",
    // borderRadius: 15,
    // borderWidth: 10,
    // borderColor: '#902E2E',
    overflow: "hidden",
    top: 480,
    //   width: 44,
    //  height: 44,
    borderRadius: 23,
    padding: 10,
    marginHorizontal: 6,
  },
  gpsstyle: {
    flexDirection: "row",
    backgroundColor: "#902E2E",
    // borderRadius: 15,
    // borderWidth: 10,
    // borderColor: '#902E2E',
    overflow: "hidden",
    top: 505,
    //   width: 44,
    //  height: 44,
    borderRadius: 23,
    padding: 10,
    marginHorizontal: 6,
  },
  IconStyle: {
    alignItems: "flex-end",

    // backgroundColor: '#902E2E'
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titleText: {
    fontSize: 20,
    // fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: -5,
    letterSpacing: 2.5,
    justifyContent: "center",
    flexDirection: "row",
    fontFamily: "Roboto", //"RobotoCondensed_400Regular",
  },
  baseText: {
    fontSize: 27,
    color: "white",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: 15,
    fontFamily: "Roboto",
  },
  contentContainer: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#902E2E",
    flexDirection: "row",
    paddingHorizontal: 18,
    marginTop: 20,
  },
  ViewStyle: {
    flexDirection: "column",
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 50,
    marginHorizontal: 30,
  },
});
