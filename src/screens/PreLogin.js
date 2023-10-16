
import StartScreen from "./StartScreen/StartScreen";
import LoginScreen from "./LoginScreen/LoginScreen";

import { createStackNavigator } from "@react-navigation/stack";
const StartStack = createStackNavigator();

export default function PreLogin() {
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
