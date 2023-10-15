import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import Event from "../../data-models/event-model";
import FirebaseAPI from "../../firebase/firebaseAPI";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapstyle from "./mapstyle.json"

const CreateEventScreen = ({ navigation }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTag, setEventTag] = useState("");
  const [layoutReady, setLayoutReady] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
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

  const handleCreateEvent = () => {
    const createdEvent = new Event(
      "",
      eventName,
      eventLocation,
      eventDate,
      eventTag,
      true
    );
    FirebaseAPI.addEvent(createdEvent);
    navigation.navigate("What's the Move?");
  };

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
      <View style={styles.inputContainer}>
        <Text style={styles.textHeading}>Event Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Event Name"
          value={eventName}
          onChangeText={(text) => setEventName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textHeading}>Event Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Event Date"
          value={eventDate.toDateString()}
          caretHidden={true} // Hide the cursor
          selection={{ start: 0, end: 0 }} // Hide text selection
          onTouchStart={() => setShowDatePicker(true)}
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={eventDate}
          mode="date" // You can use "date" or "time" here as well
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (event.type === "set") {
              setEventDate(selectedDate);
            }
          }}
        />
      )}
      <View style={styles.inputContainer}>
        <Text style={styles.textHeading}>Event Time:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Event Time"
          value={eventDate.toTimeString()}
          caretHidden={true} // Hide the cursor
          selection={{ start: 0, end: 0 }} // Hide text selection
          onTouchStart={() => setShowTimePicker(true)}
        />
      </View>
      {showTimePicker && (
        <DateTimePicker
          value={eventDate}
          mode="time" // You can use "Time" or "time" here as well
          is24Hour={false}
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (event.type === "set") {
              setEventDate(selectedTime);
            }
          }}
        />
      )}
      <View style={styles.inputContainer}>
        <Text style={styles.textHeading}>Event Tag:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Event Tag"
          value={eventTag}
          onChangeText={(text) => setEventTag(text)}
        />
      </View>

      <View
        style={styles.mapContainer}
        onLayout={() => {
          setLayoutReady(true);
        }}
      >
        {layoutReady && (
          <MapView
            provider={PROVIDER_GOOGLE}

            style={styles.mapContainer}
            initialRegion={{
              latitude: 33.7750794627932,
              latitudeDelta: 0.020592708501247614,
              longitude: -84.39693929627538,
              longitudeDelta: 0.012477971613407135,
            }}
            onRegionChange={onRegionChange}
            customMapStyle={mapstyle}
          >
            {showLocationsOfInterest()}
            <Marker
              draggable
              coordinate={eventLocation}
              onDragEnd={(e) => setEventLocation(e.nativeEvent.coordinate)}
              pinColor="blue"
            ></Marker>
          </MapView>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Button
          style={styles.createEventButton}
          disabled={eventName.length == 0 || eventLocation.length == 0}
          title="Create Event"
          onPress={handleCreateEvent}
        />
      </View>
    </View>
  );
};

export default CreateEventScreen;
