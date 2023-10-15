import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import InsideLayout from "./src/screens/index";
import MapScreen from "./src/screens/MapScreen/MapScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useState, useEffect } from "react";

import { auth } from "./src/firebase/config";
import CreateEventScreen from "./src/screens/CreateEventScreen/CreateEventScreen";

const Stack = createStackNavigator();

const App = () => {
  // return <MapScreen></MapScreen>;

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("User: " + user);
      setUser(user);
    });
  }, []);

  // login screen if user exists, else move in index.js

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!user ? (
          <Stack.Screen //should be when user exists
            name="InsideStack"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <CreateEventScreen></CreateEventScreen>
  );
};
export default App;
