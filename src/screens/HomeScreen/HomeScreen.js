import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text, StatusBar } from "react-native";
import FirebaseAPI from "../../firebase/firebaseAPI";
import styles from "./styles";
import ListItem from "./components/ListItem";
import FloatingActionButton from "./components/FloatingActionButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EventLocationScreen from "../EventLocationScreen/EventLocationScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

const EventScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("black");
    }
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
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={events}
          renderItem={(event) => {
            // console.log(event);
            return <ListItem item={event.item} />;
          }}
          keyExtractor={(event) => {
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

const HomeScreen = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={EventLocationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="location"
              size={30}
              color={focused ? "orange" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="calendar"
              size={30}
              color={focused ? "orange" : "white"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
