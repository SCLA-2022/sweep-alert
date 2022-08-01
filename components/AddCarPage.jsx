import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { SearchBar } from "@rneui/themed";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import Geocoder from "react-native-geocoding";
const GOOGLE_PLACES_API_KEY = "AIzaSyBxUMsP-Bl2NGRTU32nkCEkG13EbYekCDU";
Geocoder.init(GOOGLE_PLACES_API_KEY);

const horizontalLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 4,
    }}
  />
);

const App = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [search, setSearch] = React.useState("");

  // show timer button
  const [show, setShow] = React.useState();

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "85%"], []);
  // const snapPoints = useMemo(() => ["15%", "30%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const [modalVisible, setModalVisible] = useState(false);

  const renderModal = () => (
    <View
      style={{
        position: "absolute",
        ...StyleSheet.absolutefillObject,
        backgroundColor: "rgba(0,0,0, 0.8)",
        zIndex: 35,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          navigation.navigate("Dashboard");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} opacity={0.95}>
            <Text style={styles.modalTexttwo}>Sweep Alert</Text>
            <View style={{ paddingHorizontal: 25, flexDirection: "row" }}>
              <Text style={styles.modalText}>
                Address has been saved. Check your map.
              </Text>
            </View>
            <View
              style={{
                // borderBottomColor: "#3A3A3A",
                // backgroundColor: "red",
                // backgroundColor: "blue",
                // height: 0,
                marginTop: 49.6,
                borderBottomWidth: 1,
                alignSelf: "stretch",
                // marginTop: 49.6,
                flex: 1,
                // width: 380.21,
                // alignItems: "center",
              }}
            />
            <View style={styles.okstyle}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setShow(false);
                  navigation.navigate("MapPage");
                }}
              >
                <Text
                  style={{
                    color: "white",
                    // backgroundColor: "blue",
                    fontSize: 19.01,
                    textAlign: "center",
                  }}
                >
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );

  return (
    <View style={styles.flexput}>
      {modalVisible === true ? renderModal() : null}

      <View style={styles.container}>
        <BottomSheet
          // ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "#902E2E" }}
          onChange={handleSheetChanges}
        >
          <GooglePlacesAutocomplete
            placeholder="Search"
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en", // language of the results
            }}
            onPress={(data, details = null) => {
              console.log(details.description);
              setShow(true);
              setSearch(details.description);
            }}
            onFail={(error) => console.error(error)}
            requestUrl={{
              url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
              useOnPlatform: "web",
            }} // this in only required for use on the web. See https://git.io/JflFv more for details.
            styles={{
              container: {
                flex: 1,
                position: "absolute",
                zIndex: 10,
              },
              textInputContainer: {
                flexDirection: "row",
                width: 315,
                marginHorizontal: 10,
              },
              textInput: {
                backgroundColor: "#FFFFFF",
                height: 44,
                // width: 100,
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontSize: 15,
                flex: 1,
              },
              poweredContainer: {
                justifyContent: "flex-end",
                alignItems: "center",
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
                borderColor: "#c8c7cc",
                borderTopWidth: 0.5,
              },
              powered: {},
              listView: {},
              row: {
                backgroundColor: "#FFFFFF",
                padding: 13,
                height: 44,
                flexDirection: "row",
              },
              separator: {
                height: 0.5,
                backgroundColor: "#c8c7cc",
              },
              description: {},
              loader: {
                flexDirection: "row",
                justifyContent: "flex-end",
                height: 20,
              },
            }}
          />
          <View style={styles.IconView}>
            <Entypo
              onPress={() => navigation.navigate("Dashboard")}
              style={styles.directions}
              name="chevron-down"
              size={35}
              color="white"
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              // backgroundColor: "black",
            }}
          >
            {show ? (
              <TouchableOpacity
                style={styles.buttonstyle}
                onPress={() => {
                  // toggles the boolean value of ismodaltrue
                  setModalVisible(!modalVisible);
                  Geocoder.from(search)
                    .then((json) => {
                      var location = json.results[0].geometry.location;
                      console.log(location);
                    })
                    .catch((error) => console.log(error));
                }}
              >
                <Text
                  style={{ color: "white", alignSelf: "center", fontSize: 18 }}
                >
                  {" "}
                  Save{" "}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    // backgroundColor: "#ecf0f1",
  },
  buttonstyle: {
    backgroundColor: "#591818",
    height: 50,
    width: 126,
    justifyContent: "center",
    borderRadius: 200,
    marginBottom: 380,
    marginHorizontal: 14,
  },
  flexput: {
    flex: 1,
  },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  directions: {
    justifyContent: "flex-end",
  },
  IconView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 1,
  },
  arrowstyle: {
    marginVertical: 20,
    color: "#902E2E",
    // backgroundColor: 'yellow',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 358.08,
    // backgroundColor: "blue",
  },
  modalView: {
    // margin: 15,
    backgroundColor: "#222222",
    borderRadius: 20,
    // padding: 25,
    // paddingTop: 25,
    width: 380.21,
    height: 209.12,
    overflow: "hidden",
    alignItems: "center",
    // flexWrap: "wrap",
    // paddingHorizontal: 25,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
  },

  modalText: {
    // marginBottom: 15,
    textAlign: "center",
    color: "#929292",
    fontSize: 16,
    marginTop: 14.05,
    width: 250,
    // paddingHorizontal: 25,
    // backgroundColor: "red",
  },
  modalTexttwo: {
    textAlign: "center",
    color: "white",
    fontSize: 19.01,
    // backgroundColor: "blue",
    marginTop: 22.18,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  //   marginTop: 5,
  // },
  okstyle: {
    //  backgroundColor: "yellow",
    width: "100%",
    height: 55.58,
  },
  buttonClose: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 6
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;

// type SearchBarComponentProps = {};

// const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
// const [search, setSearch] = useState("");

// const updateSearch = (search) => {
//   setSearch(search);
// };

// return (
//   <View style={styles.view}>
//     <SearchBar
//       placeholder="Type Here..."
//       onChangeText={updateSearch}
//       value={search}
//     />
//   </View>
// );
// };

// const styles = StyleSheet.create({
// view: {
//   margin: 10,
// },
// });

// export default SwitchComponent;
