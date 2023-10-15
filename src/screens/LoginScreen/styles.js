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
  },
  wtmText: {
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
    marginBottom: 15,
  },
});

export default styles;
