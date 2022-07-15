import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBxUMsP-Bl2NGRTU32nkCEkG13EbYekCDU';

const App = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const bodyText = "3655 S Grand Ave #220, Los Angeles, CA 90007";
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en', // language of the results
        }}
        onPress={(data, details = null) => console.log(data)}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
      />
      <SafeAreaView>
     <TextInput
       style={styles.input}
       onChangeText={onChangeText}
       value={text}
     />
    <Text style={styles.titleText}>
        Your Current Location
    </Text>
    <Text style={styles.baseText}>
        {"\n"}
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
   </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  baseText: {
    fontFamily: "sans-serif"
    ,fontSize: 30,
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