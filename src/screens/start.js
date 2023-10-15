import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import StartScreen from "./StartScreen/StartScreen";
import LoginScreen from "./LoginScreen/LoginScreen";

const StartStack = createStackNavigator();

export default function StartLayout() {
  return (
    <StartStack.Navigator initialRouteName="Start Screen">
      <StartStack.Screen
        options={{ headerShown: false }}
        name="Start Screen"
        component={StartScreen}
      />
      <StartStack.Screen
        name="Login Screen"
        component={LoginScreen}
        options={{ headerLeft: null, headerShown: false }}
      />
    </StartStack.Navigator>
  );
}
