import { DataContext } from "../../../firebase/FirebaseDataProvider";

import React, { useContext, useEffect, useState } from "react";

import { SafeAreaView, FlatList, View, StatusBar, ActivityIndicator } from "react-native";

import ListItem from "./components/ListItem";
import FloatingActionButton from "./components/FloatingActionButton";
import styles from "./styles";


export default EventScreen = ({ navigation }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const { getEvents } = useContext(DataContext)


    useEffect(() => {
        StatusBar.setBarStyle("light-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("black");
        }

        //have to change this because of rate limit. instead when new event is created update firebase and local cache. also add a refresh scroll for events created by others. 
        const unsubscribe = navigation.addListener("focus", () => {
            setLoading(true)
            getEvents()
                .then((eventList) => setEvents(eventList))
                .catch((error) => alert(error))
            setLoading(false)
        });
        return unsubscribe
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {(loading) ?
                (<ActivityIndicator></ActivityIndicator>) :
                (<View>
                    <FlatList
                        style={styles.list}
                        data={events}
                        renderItem={(event) => <ListItem item={event.item} />}
                        keyExtractor={(event) => event.id}
                    />
                    <FloatingActionButton onPressItem={() => navigation.navigate("Make a Move")} />
                </View>)
            }
        </SafeAreaView>
    );
};