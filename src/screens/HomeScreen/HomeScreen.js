import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";
import FirebaseAPI from "../../firebase/firebaseAPI";
import styles from "./styles";
import ListItem from "./components/ListItem";
import FloatingActionButton from "./components/FloatingActionButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import EventLocationScreen from "../EventLocationScreen/EventLocationScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

const eventStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    flex: 1,
    backgroundColor: "black",
    // flexDirection: 'column'
  },
  list: {
    position: "absolute",
    width: 1.0 * windowWidth,
    // alignItems: 'center'
  },
});

// const MapScreen = () => (
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>Map</Text>
//   </View>
// );

const EventScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const fetchEvents = async () => {
        const eventData = await FirebaseAPI.readEvents();
        setEvents(eventData);
        setLoading(false);
      };
      fetchEvents();
    });
    return unsubscribe;
  }, [navigation]);
  if (!loading) {
    return (
      <SafeAreaView style={eventStyles.container}>
        <FlatList
          style={eventStyles.list}
          data={events}
          renderItem={(event) => {
            // console.log(event);
            return <ListItem item={event.item} />;
          }}
          keyExtractor={(event) => {
            console.log(event.date);
            return event.id;
          }}
        />
        <FloatingActionButton
          onPressItem={() => navigation.navigate("Make a Move")}
        />
      </SafeAreaView>
    );
  } else {
    return <View></View>;
  }
};

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={EventLocationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Event"
        component={EventScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

// const [events, setEvents] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const unsubscribe = navigation.addListener("focus", () => {
//     const fetchEvents = async () => {
//       const eventData = await FirebaseAPI.readEvents();
//       setEvents(eventData);
//       setLoading(false);
//     };
//     fetchEvents();
//   });

//   return unsubscribe;
// }, [navigation]);

// if (!loading) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         style={styles.list}
//         data={events}
//         renderItem={(event) => <ListItem item={event.item} />}
//         keyExtractor={(event) => event.id}
//       />
//       <FloatingActionButton
//         onPressItem={() => navigation.navigate("Make a Move")}
//       />
//     </SafeAreaView>
//   );
// } else {
//   return <View></View>;
// }
export default HomeScreen;
