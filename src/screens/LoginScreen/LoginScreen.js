import { View, ActivityIndicator, Text, Dimensions } from "react-native";

import { auth } from "../../firebase/config";
import LoginCard from "./components/LoginCard";

import { StyleSheet } from "react-native";

export default function LoginScreen({ route, navigation }) {
  const { color, font } = route.params;

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
      marginBottom: 30,
      paddingLeft: 10,
    },
    wtmText: {
      fontSize: 90,
      fontFamily: font,
      color: color,
      marginTop: 0.15 * windowHeight,
      textShadowColor: color,
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 30,
    },
    wtmContainer: {},
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

  if (auth) {
    return (
      <View style={styles.container}>
        <View style={styles.wtmContainer}>
          <Text style={styles.wtmText}>WTM</Text>
        </View>
        <LoginCard auth={auth}></LoginCard>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  }
}
