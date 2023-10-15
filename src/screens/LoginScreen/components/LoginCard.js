import { TextInput } from "react-native-gesture-handler";
import {
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { useState } from "react";
import styles from "../styles";
import { auth } from "../../../firebase/config";

export default LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View styles={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>

      {loading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <>
          <View style={styles.buttonContainer}>
            <Button title="login" onPress={signIn} color="black"></Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="create account"
              onPress={signUp}
              color="black"
            ></Button>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
};
