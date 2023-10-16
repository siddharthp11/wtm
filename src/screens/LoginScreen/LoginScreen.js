import { View, Text } from "react-native";

import LoginCard from "./components/LoginCard";
import styles from "./styles";

export default function LoginScreen({ route }) {
  const { color, font } = route.params; //use color context 

  return (
    <View style={styles.container}>
      <Text style={[styles.wtmText, { fontFamily: font, color: color, textShadowColor: color }]}>WTM</Text>
      <LoginCard color={color}></LoginCard>
    </View>
  );
}
