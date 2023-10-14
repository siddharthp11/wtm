import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import React, { useEffect, useState } from 'react';
import FirebaseAPI from './src/firebase/firebaseAPI'
import {Text, View, SafeAreaView, FlatList, StyleSheet, Dimensions} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { Button } from 'react-native';

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      display: 'flex',
      flex: 1,
      // flexDirection: 'column'
    },
    list: {
      position: 'absolute',
      width: 0.9 * windowWidth,
    },
    listItem: {
      padding: 0.01 * windowHeight,
      width: 0.8 * 0.9 * windowWidth,
      height: 0.1 * windowHeight,
      color: 'black',
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      margin: 10
    },
    createEventButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      // margin: 20,
      width: 100, // or adjust the width as needed
      height: 100, // or adjust the height as needed
      // borderRadius: 40, // to make it a circle
      // backgroundColor: 'blue', // customize the background color
      alignItems: 'center',
      justifyContent: 'center',
      fill: 'none'
    },
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await FirebaseAPI.readEvents();
      setEvents(eventData);
      setLoading(false);
    };
    fetchEvents()
  }, []);

  if (!loading){
    const ListItem = ({item}) => (
      <View>
        <Text style={styles.listItem}>{item.name}</Text>
      </View>
    );
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={events}
          renderItem={(event) => <ListItem item={event.item} />}
          keyExtractor={(event) => event.id}
        />
        <View style={styles.createEventButton}>
          <FloatingAction
          actions={[{text: "Accessibility",
              // icon: require("./images/ic_accessibility_white.png"),
              name: "bt_accessibility",
              position: 2
            }]}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return <View></View>
  }

}
export default App;
