import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import React, { useEffect, useState } from 'react';
import FirebaseAPI from './src/firebase/firebaseAPI'
import {Text, View, SafeAreaView, FlatList, StyleSheet, Dimensions, TouchableOpacity, Modal} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { Button } from 'react-native';
import StartupScreen from './src/screens/StartScreen/StartScreen';

const App = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      display: 'flex',
      flex: 1,
      // flexDirection: 'column'
    },
    list: {
      position: 'absolute',
      width: 1.0 * windowWidth
      // alignItems: 'center'
    },
    listItem: {
      flex: 1,
      justifyContent: 'center',
      // alignContent: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      // width: 0.8 * 0.9 * windowWidth,
      height: 0.1 * windowHeight,
      color: 'black',
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      margin: 10
    },
    textInListItem: {
      textAlign: 'center', // Center text horizontally
      color: 'black',
    },
    createEventButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      // margin: 20,
      width: 100, // or adjust the width as needed
      height: 100, // or adjust the height as needed
      // borderRadius: 40, // to make it a circle
      // backgroundColor: 'blue', // customize the background color
      // alignItems: 'center',
      // justifyContent: 'center',
      fill: 'none'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      borderColor: 'black',
      borderWidth: 1,
    },
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await FirebaseAPI.readEvents();
      setEvents(eventData);
      setLoading(false);
    };
    fetchEvents()
  }, []);

  handleEventPressed = () => {
    console.log("Pressed");
  }

   // Pop Up Handling Variables
  const [visiblePopUp, setVisiblePopUp] = useState(-1);

  const openPopUp = (item) => {
    setVisiblePopUp(item.id);
  };

  const closePopUp = () => {
    setVisiblePopUp(-1);
  };

  const PopUp = (props) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          // Handle the modal close event if needed
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Pop-up Content</Text>
            <Text>{props.item.name}</Text>
            <Button title="Close" onPress={props.onClose} />
          </View>
        </View>
      </Modal>
    );
  };

  if (!loading){
    const ListItem = ({item}) => (
      <View>
        <TouchableOpacity onPress={() => openPopUp(item)}>
          <View style={styles.listItem} onPressItem={(item) => {console.log(item.name)}}>
            <Text style={styles.textInListItem}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        <PopUp visible={item.id == visiblePopUp} onClose={() => closePopUp()} item={item} />
      </View>
    );
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={events}
          renderItem={(event) => <ListItem item={event.item} />}
          keyExtractor={(event) => event.id}
        />
        <View style={styles.createEventButton}>
          <FloatingAction
          showBackground={false}
          actions={[{text: "Accessibility",
              // icon: require("./images/ic_accessibility_white.png"),
              name: "bt_accessibility",
              position: 2
            }]}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return <View></View>
  }

}
export default App;
