import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen/HomeScreen";
import CreateEventScreen from "./CreateEventScreen/CreateEventScreen";

const InnerStack = createStackNavigator();

export default function InsideLayout() {
  return (
    <InnerStack.Navigator initialRouteName="Home">
      <InnerStack.Screen name="What's the Move?" component={HomeScreen} />
      <InnerStack.Screen name="Make a Move" component={CreateEventScreen} />
    </InnerStack.Navigator>
  );
}
