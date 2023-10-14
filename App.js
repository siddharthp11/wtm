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
    },
    list: {
      position: 'absolute',
      top: 0.1 * windowHeight,
      left: 0.1 * windowWidth,
      width: 0.9 * windowWidth
    },
    createEventButton: {
      position: 'absolute',
      bottom: 0.5 * windowHeight,
      right: 0.5 * windowWidth
    },
    listItem: {
      alignItems: 'center',
      padding: 0.01 * windowHeight,
      width: 0.8 * 0.9 * windowWidth,
      height: 0.1 * windowHeight,
      color: 'black',
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      margin: 10
    }
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
      <SafeAreaView>
        <FlatList
          style={styles.list}
          data={events}
          renderItem={(event) => <ListItem item={event.item} />}
          keyExtractor={(event) => event.id}
        />
        <Button title="Create an Event" onPress={console.log("Creating Event")} />
      </SafeAreaView>
    );
  } else {
    return <View></View>
  }

}
export default App;
