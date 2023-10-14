import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import FirebaseAPI from "../../firebase/firebaseAPI";
import styles from "./styles";
import ListItem from "./components/ListItem";
import FloatingActionButton from "./components/FloatingActionButton";

const HomeScreen = ({navigation}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await FirebaseAPI.readEvents();
      setEvents(eventData);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={events}
          renderItem={(event) => <ListItem item={event.item} />}
          keyExtractor={(event) => event.id}
        />
        <FloatingActionButton onPressItem = {() => navigation.navigate("Make a Move")}/>
      </SafeAreaView>
    );
  } else {
    return <View></View>;
  }
};
export default HomeScreen;
