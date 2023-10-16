import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "./ViewEventScreen/EventScreen";
import CreateEventScreen from "./CreateEventScreen/CreateEventScreen";

const InnerStack = createStackNavigator();

export default function EventScreenStack() {
  return (
    <InnerStack.Navigator initialRouteName="What's the Move?">
      <InnerStack.Screen name="What's the Move?" component={EventScreen} options={{ headerShown: false }} />
      <InnerStack.Screen name="Make a Move" component={CreateEventScreen} options={{ headerShown: false }} />
    </InnerStack.Navigator>
  );
}
