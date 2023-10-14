// CreateEventScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEventScreen = () => {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTag, setEventTag] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleCreateEvent = () => {
    // Handle event creation logic, e.g., save data to Firebase
  };

  return (
    <View>
      <Text>Event Name:</Text>
      <TextInput
        placeholder="Enter Event Name"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />

      <Text>Event Location:</Text>
      <TextInput
        placeholder="Enter Event Location"
        value={eventLocation}
        onChangeText={text => setEventLocation(text)}
      />

      <Text>Event Date:</Text>
      <TextInput
        placeholder="Select Event Date"
        value={eventDate.toDateString()}
        onTouchStart={() => setShowDatePicker(true)}
      />

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

      <Text>Event Time:</Text>
      <TextInput
      placeholder="Select Event Time"
      value={eventDate.toTimeString()}
      onTouchStart={() => setShowTimePicker(true)}
      />

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

      <Text>Event Tag:</Text>
      <TextInput
        placeholder="Enter Event Tag"
        value={eventTag}
        onChangeText={text => setEventTag(text)}
      />

      <Button
        title="Create Event"
        onPress={handleCreateEvent}
      />
    </View>
  );
};


export default CreateEventScreen;