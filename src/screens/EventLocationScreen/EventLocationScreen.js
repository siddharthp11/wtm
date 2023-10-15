import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { Button, Text, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import mapstyle from './mapstyle.json'
import FirebaseAPI from "../../firebase/firebaseAPI";
import PopUp from "./components/PopUp";


export default function EventLocationScreen({ navigation }) {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            const fetchEvents = async () => {
                let eventData = await FirebaseAPI.readEvents();
                eventData = eventData.map((item, index) => {
                    return (
                        <Marker
                            key={index}
                            pinColor='green'
                            coordinate={item.location}
                            title={item.name}
                            description={item.tag}
                        >
                            <Callout tooltip={true}>
                                {/* <View style={styles.calloutView}>
                                    <Text style={styles.calloutText}>{item.name}</Text>
                                    <Text style={{ color: 'green' }}>{item.tag}</Text>
                                </View> */}

                                <PopUp item={item}></PopUp>
                            </Callout>
                        </Marker>
                    );
                });
                setEvents(eventData);
                setLoading(false);
            };
            fetchEvents();
        });
        return unsubscribe;
    }, [navigation]);



    return (<View>
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 33.7750794627932,
                latitudeDelta: 0.10592708501247614,
                longitude: -84.39693929627538,
                longitudeDelta: 0.12477971613407135,
            }}
            style={styles.mapContainer}
            customMapStyle={mapstyle}
        >
            {loading ? [] : events}
        </MapView>
    </View>
    )

}

const styles = StyleSheet.create({
    mapContainer: {
        width: "100%",
        height: "100%",
    },
    calloutView: {
        backgroundColor: 'blue',
        borderRadius: 20,
        width: 170,
        height: 100,
        alignItems: 'left',
        justifyContent: 'left',
        padding: 10,
    },
    calloutText: {
        color: 'orange',
        fontSize: 16,
    },
})
