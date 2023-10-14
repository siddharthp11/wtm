import { StyleSheet, Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      display: "flex",
      flex: 1,
      // flexDirection: 'column'
    },
    list: {
      position: "absolute",
      width: 1.0 * windowWidth,
      // alignItems: 'center'
    },
    listItem: {
      flex: 1,
      justifyContent: "center",
      // alignContent: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      // width: 0.8 * 0.9 * windowWidth,
      height: 0.1 * windowHeight,
      color: "black",
      borderColor: "black",
      borderRadius: 5,
      borderWidth: 1,
      margin: 10,
    },
    textInListItem: {
      textAlign: "center", // Center text horizontally
      color: "black",
    },
    createEventButton: {
      position: "absolute",
      bottom: 10,
      right: 10,
      // margin: 20,
      width: 100, // or adjust the width as needed
      height: 100, // or adjust the height as needed
      // borderRadius: 40, // to make it a circle
      // backgroundColor: 'blue', // customize the background color
      // alignItems: 'center',
      // justifyContent: 'center',
      fill: "none",
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
      borderColor: "black",
      borderWidth: 1,
    },
  });

  export default styles