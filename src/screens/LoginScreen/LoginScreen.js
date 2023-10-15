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
    wtmText: {
      fontSize: 90,
      fontFamily: font,
      color: color,
      marginTop: 0.15 * windowHeight,
      textShadowColor: color,
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 30,
    }
  });

  if (auth) {
    return (
      <View style={styles.container}>
        <Text style={styles.wtmText}>WTM</Text>
        <LoginCard auth={auth} color={color}></LoginCard>
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
