import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import mapstyle from './mapstyle.json'
import FirebaseAPI from "../../firebase/firebaseAPI";


export default function EventLocationScreen() {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            let eventData = await FirebaseAPI.readEvents();
            eventData = eventData.map((d) => {
                return {
                    title: d.name,
                    location: d.location,
                    description: d.tag
                }
            })
            setEvents(eventData);
            setLoading(false);
        };
        fetchEvents();
    });

    const showEventLocations = () => {
        return events.map((item, index) => {
            console.log(item)
            return (
                <Marker
                    key={index}
                    coordinate={item.location}
                    title={item.name}
                    description={item.tag}
                ></Marker>
            );
        });
    };
    return (<View>
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 33.7750794627932,
                latitudeDelta: 0.020592708501247614,
                longitude: -84.39693929627538,
                longitudeDelta: 0.012477971613407135,
            }}
            customMapStyle={mapstyle}
        >
            {loading ? [] : showEventLocations()}
        </MapView>
    </View>

    )
}

const styles = StyleSheet.create({
    width: "100%",
    height: "50%",
})
