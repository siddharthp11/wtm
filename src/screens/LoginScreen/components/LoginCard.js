import { TextInput } from "react-native-gesture-handler";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { AuthContext } from "../../../firebase/FirebaseAuthProvider";
import { useContext, useState } from "react";
import styles from "../styles";


export default LoginCard = (props) => {
  const { color } = props;
  const { authSignIn, authSignUp } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = () => {
    setLoading(true);
    authSignIn(email, password)
      .catch((error) => alert(error))
      .finally(() => setLoading(false))
  };

  const signUp = () => {
    setLoading(true);
    authSignUp(email, password)
      .catch((error) => alert(error))
      .finally(() => setLoading(false))
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
