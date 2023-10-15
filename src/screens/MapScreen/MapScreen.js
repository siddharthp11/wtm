import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import { useState } from "react";

const MapScreen = () => {
  const [eventLocation, setEventLocation] = useState({
    latitude: 33.7750794627932,
    longitude: -84.39693929627538,
  });

  let locationsOfInterest = [
    {
      title: "Inspire",
      location: {
        latitude: 33.7703492,
        longitude: -84.3950793,
      },
      description: "Inspire Atlanta",
    },
    {
      title: "U-House",
      location: {
        latitude: 33.7797453,
        longitude: -84.3939246,
      },
      description: "University House Midtown",
    },
  ];

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        ></Marker>
      );
    });
  };

  const onRegionChange = (region) => {
    setEventLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.7750794627932,
          latitudeDelta: 0.020592708501247614,
          longitude: -84.39693929627538,
          longitudeDelta: 0.012477971613407135,
        }}
        onRegionChange={onRegionChange}
      >
        {showLocationsOfInterest()}
        <Marker
          draggable
          coordinate={eventLocation}
          onDragEnd={(e) => setEventLocation(e.nativeEvent.coordinate)}
          pinColor="blue"
        ></Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  mapContainer: {
    width: "80%",
    height: "33%",
    backgroundColor: "black",
  },
});

export default MapScreen;
