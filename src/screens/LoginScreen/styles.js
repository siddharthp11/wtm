import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    color: "white",
  },
  wtmText: {
    fontSize: 90,
    color: "white",
    marginTop: 0.15 * windowHeight,
  },
  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 5,
    width: 0.4 * windowWidth,
    height: 0.07 * windowHeight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0.2 * windowHeight,
    left: 0,
    right: 0,
  },
});

export default styles;
