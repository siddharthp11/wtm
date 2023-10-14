import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import React, { useEffect, useState } from 'react';
import FirebaseAPI from './src/firebase/firebaseAPI'
import {Text, View, SafeAreaView, FlatList} from 'react-native';


const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await FirebaseAPI.readEvents();
      setEvents(eventData);
      setLoading(false);
    };
    fetchEvents()
  }, []);

  if (!loading){
    const ListItem = ({name}) => (
      <View>
        <Text>{name}</Text>
      </View>
    );
    return (
      <SafeAreaView>
        <FlatList
          data={events}
          renderItem={(event) => <ListItem name={event.item.name} />}
          keyExtractor={(event) => event.id}
        />
      </SafeAreaView>
    );
  } else {
    return <View></View>
  }

}
export default App;
