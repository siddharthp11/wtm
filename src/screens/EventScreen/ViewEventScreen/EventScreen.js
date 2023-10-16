import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, StatusBar, ActivityIndicator } from "react-native";
import FirebaseAPI from "../../../firebase/firebaseAPI";
import styles from "./styles";
import ListItem from "./components/ListItem";
import FloatingActionButton from "./components/FloatingActionButton";

export default EventScreen = ({ navigation }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        StatusBar.setBarStyle("light-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("black");
        }
        navigation.addListener("focus", () => {
            const fetchEvents = async () => {
                const eventData = await FirebaseAPI.readEvents();
                setEvents(eventData);
                setLoading(false);
            };
            fetchEvents();
        });
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