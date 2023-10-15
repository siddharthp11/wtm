import { View, ActivityIndicator, Text } from "react-native";

import { auth } from "../../firebase/config";
import styles from "./styles";
import LoginCard from "./components/LoginCard";

import { StyleSheet } from "react-native";

export default function LoginScreen() {
  if (auth) {
    return (
      <View style={styles.container}>
        <Text style={styles.wtmText}>WTM</Text>
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
