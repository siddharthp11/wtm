import { TextInput } from "react-native-gesture-handler";
import {
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import { auth } from "../../../firebase/config";

export default LoginCard = (props) => {
  const { color } = props;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 0.05 * windowHeight,
      alignItems: "center",
      backgroundColor: "black",
    },
    input: {
      width: 300,
      height: 40,
      borderColor: "grey",
      borderWidth: 1,
      margin: 10,
      paddingLeft: 10,
      color: "white",
    },
    buttonContainer: {
      width: 0.4 * windowWidth,
      height: 0.07 * windowHeight,
      marginBottom: 10,
      marginTop: 10,
    },
    button: {
      backgroundColor: "black",
      borderColor: color,
      borderWidth: 1,
      borderRadius: 12,
      padding: 5,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    buttonText: {
      color: color,
      fontSize: 18,
    },
  });

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
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={signIn}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
};
