import {
  View,
  ActivityIndicator,
} from "react-native";

import { auth } from "../../firebase/config";
import styles from "./styles";
import LoginCard from "./components/LoginCard";

export default function LoginScreen() {
  if (auth) {
    return (
      <View style={styles.container}>
          <LoginCard auth={auth}></LoginCard>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator ></ActivityIndicator>
      </View>
    );
  }
}




