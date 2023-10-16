import { View, ActivityIndicator, Text, Dimensions } from "react-native";

import { auth } from "../../firebase/config";
import LoginCard from "./components/LoginCard";
import styles from "./styles";

export default function LoginScreen({ route, navigation }) {
  const { color, font } = route.params;

  if (auth) {
    return (
      <View style={styles.container}>
        <Text style={[styles.wtmText, { fontFamily: font, color: color, textShadowColor: color }]}>WTM</Text>
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
