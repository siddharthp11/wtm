import EventLocationScreen from "./MapScreen/MapScreen";
import EventScreenStack from "./EventScreen/EventScreenStack";
import UserScreen from "./UserScreen/UserScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppLayout({ navigation, route }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={EventLocationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="location"
              size={30}
              color={focused ? "royalblue" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventScreenStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="calendar"
              size={30}
              color={focused ? "royalblue" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="person"
              size={30}
              color={focused ? "royalblue" : "white"}
            />
          ),
        }}
      />
    </Tab.Navigator>

  );
};
