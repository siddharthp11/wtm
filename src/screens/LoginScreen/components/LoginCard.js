import { TextInput } from "react-native-gesture-handler";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import { auth } from "../../../firebase/config";
import styles from "../styles";

export default LoginCard = (props) => {
  const { color } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      console.log(response)
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
          placeholderTextColor="white"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="white"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>

      {loading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <>
          <TouchableOpacity style={styles.buttonContainer} onPress={signIn}>
            <View style={[styles.button, { borderColor: color }]}>
              <Text style={[styles.buttonText, { color: color }]}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={signUp}>
            <View style={[styles.button, { borderColor: color }]}>
              <Text style={[styles.buttonText, { color: color }]}>Create Account</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
};
