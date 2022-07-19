import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Searchbar } from "react-native-paper";

  const App = () => {
    const onChangeSearch = (query) => setSearchQuery(query);
    const [searchQuery, setSearchQuery] = React.useState("");

    return (
      <SafeAreaView>
        <Text style={styles.headerstyle}>
          Login
          </Text>
          <Text style={styles.userstyle}>
          Email
          </Text>
          <View style={styles.Viewstyle}>
            {/* <Searchbar
              onChangeText={onChangeSearch}
              value={searchQuery}
            /> */}
            </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    headerstyle: {
      // justifyContent: 'center',
      alignSelf: 'center',
      color: "#591818",
      fontSize: 32,
      paddingTop: 50,
    },
    title: {
      fontSize: 32,
    },
    userstyle: {
      fontSize: 20,
      flexDirection: 'row-reverse',
      marginTop: 50,
      marginHorizontal: 20,
    },
    Viewstyle: {
      backgroundColor: '#902E2E',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }
  });
  
  export default App;