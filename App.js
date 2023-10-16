import AppLayout from "./src/screens/AppLayout";
import PreLogin from "./src/screens/PreLogin";

import { useState, useEffect } from "react";
import { auth } from "./src/firebase/config";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "PreLogin" : "AppLayout"}>
        <Stack.Screen
          name="PreLogin"
          component={PreLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppLayout"
          component={AppLayout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
