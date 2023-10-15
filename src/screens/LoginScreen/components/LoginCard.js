import { TextInput } from "react-native-gesture-handler";
import { Button, ActivityIndicator, KeyboardAvoidingView } from "react-native";
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
    <KeyboardAvoidingView>
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

      {loading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <>
          <Button title="login" onPress={signIn}></Button>
          <Button title="create account" onPress={signUp}></Button>
        </>
      )}
    </KeyboardAvoidingView>
  );
};
