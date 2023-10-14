// CreateEventScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import Event from '../../data-models/event-model';
import FirebaseAPI from '../../firebase/firebaseAPI';

const CreateEventScreen = ({navigation}) => {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTag, setEventTag] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleCreateEvent = () => {
    const createdEvent = new Event("", eventName, eventLocation, eventDate, eventTag, true);
    FirebaseAPI.addEvent(createdEvent);
    navigation.navigate("What's the Move?")
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.textHeading}>Event Name:</Text>
      <TextInput style={styles.input}
        placeholder="Enter Event Name"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.textHeading}>Event Location:</Text>
      <TextInput style={styles.input}
          placeholder="Enter Event Location"
          value={eventLocation}
          onChangeText={text => setEventLocation(text)}
      />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textHeading}>Event Date:</Text>
        <TextInput style={styles.input}
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
          <TextInput style={styles.input}
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
        <TextInput style={styles.input}
          placeholder="Enter Event Tag"
          value={eventTag}
          onChangeText={text => setEventTag(text)}
        />
      </View>

      <Button style={styles.createEventButton}
        disabled={eventName.length == 0 || eventLocation.length == 0}
        title="Create Event"
        onPress={handleCreateEvent}
      />
    </View>
  );
};


export default CreateEventScreen;