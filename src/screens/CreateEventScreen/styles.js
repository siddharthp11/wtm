import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    // display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    // alignItems: "center",
    // height: Dimensions.get("window").height,
  },

  textHeading: {
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
    // borderBottomColor: "darkgrey",
    // borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  mapContainer: {
    flex: 3,
    // width: "100%",
    // height: "50%",
    // backgroundColor: "black",
  },
  input: {
    textAlign: "center",
  },

  createEventButton: {
    bottom: -40,
    left: Dimensions.get("window").width * 0.5,
  },
});

export default styles;
