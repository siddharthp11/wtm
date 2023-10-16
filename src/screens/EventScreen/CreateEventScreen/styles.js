import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    // alignItems: "center",
    // height: Dimensions.get("window").height,
  },

  textHeading: {
    color: "orange",
    textShadowColor: "orange",
    textShadowOffset: { width: 0, height: 0 }, // Adjust the offset as needed
    textShadowRadius: 30, // Adjust the radius to control the glow intensity
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  inputContainer: {
    // width: Dimensions.get("window").width * 0.9,
    // height: 55,
    marginTop: 5,
    marginBottom: 5,
    // flex: 1,
    // // paddingLeft: 10,
    // // paddingRight: 10,
    borderBottomColor: "orange",
    borderBottomWidth: 0.2,
    justifyContent: "center",
    // alignItems: "center",
    paddingLeft: 50,
    flex: 1,
  },
  mapContainer: {
    flex: 3,
    shadowColor: 'orange',  // color of the glow
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8, // opacity of the glow
    shadowRadius: 10, // radius to give a glow effect
    elevation: 10 // this is for Android
    // width: "100%",
    // height: "50%",
    // backgroundColor: "black",
  },
  input: {
    // textAlign: "center",
    paddingLeft: 10,
    color: "orange",
  },

  createEventButton: {
    flex: 1,
    bottom: -40,
    // left: Dimensions.get("window").width * 0.5,
  },
});

export default styles;
