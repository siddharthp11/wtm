import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import mapstyle from './mapstyle.json'
import { DataContext } from "../../firebase/FirebaseDataProvider";
import PopUp from "./components/PopUp";
import styles from "./styles";


export default function MapScreen({ navigation }) {
    const { getEvents } = useContext(DataContext)

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            setLoading(true)
            getEvents()
                .then((eventList) => {
                    const eventData = eventList.map((item, index) => {
                        return (
                            <Marker
                                key={index}
                                pinColor='green'
                                coordinate={item.location}
                                title={item.name}
                                description={item.tag}
                            >
                                <Callout tooltip={true}>
                                    <PopUp item={item}></PopUp>
                                </Callout>
                            </Marker>
                        );
                    });
                    setEvents(eventData);
                })
                .catch(error => alert(error))
                .finally(() => setLoading(false))
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
            customMapStyle={mapstyle} //imagine adding a listener to events to make it animate
        >
            {loading ? [] : events}

        </MapView>
    </View>
    )

}


