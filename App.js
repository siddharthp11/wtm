import AppLayout from "./src/screens/AppLayout";
import PreLogin from "./src/screens/PreLogin";

import { useContext } from "react";
import { AuthContext, AuthProvider } from "./src/firebase/FirebaseAuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import { DataProvider, DataContext } from "./src/firebase/FirebaseDataProvider";

import { ActivityIndicator, Button, View } from "react-native";
import { useState } from "react";
export default App = () => {
  return (
    <DataProvider>
      <TestComponent></TestComponent>
    </DataProvider>
  )
}

const TestComponent = () => {
  const [loading, setLoading] = useState(false)
  const { getEvents } = useContext(DataContext)

  const testDB = async () => {
    setLoading(true)
    getEvents().catch((error) => console.log(error))

    setLoading(false)
  }
  return (
    <View>
      {loading ? (<ActivityIndicator></ActivityIndicator>) : (<Button onPress={testDB} title="test" />)}
    </View>
  )
}

const AppNavigation = () => {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {user ? <AppLayout /> : <PreLogin />}
    </NavigationContainer>
  );
};

