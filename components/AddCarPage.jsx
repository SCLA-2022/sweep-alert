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
import Geocoder from 'react-native-geocoding';
const GOOGLE_PLACES_API_KEY = "AIzaSyBxUMsP-Bl2NGRTU32nkCEkG13EbYekCDU";
Geocoder.init(GOOGLE_PLACES_API_KEY);

const App = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [search, setSearch] = React.useState("");

  // show timer button
  const [show, setShow] = React.useState()

  // ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // variables
  const snapPoints = useMemo(() => ["25%", "85%"], []);
  // const snapPoints = useMemo(() => ["15%", "30%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.flexput}>
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
              setShow(true)
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
            {/* <Button
              onPress={console.log("h")}
              color = 'white'
              style={styles.buttonstyle}
              title="this is a button"
          ></Button> */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                navigation.navigate("Dashboard")
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Address has been saved</Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisible)
                      setShow(false)  
                    }}
                  >
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            

            {show ?
              <TouchableOpacity
                style={styles.buttonstyle}
                onPress={() => {setModalVisible(!modalVisible);
                    Geocoder.from(search).then(
                        json => {
                        var location = json.results[0].geometry.location;
                        console.log(location);
                        }).catch(
                         error => console.log(error));}}
              >
              <Text style={{ color: "white", alignSelf: "center" }}>
                {" "}
                Set Timer{" "}
              </Text>
              </TouchableOpacity> : null}
            

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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
