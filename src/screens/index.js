import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen/HomeScreen";

const InnerStack = createStackNavigator();

export default function InsideLayout() {
  return (
    <InnerStack.Navigator initialRouteName="Home">
      <InnerStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></InnerStack.Screen>
    </InnerStack.Navigator>
  );
}
