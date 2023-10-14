import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import CreateEventScreen from './src/screens/CreateEventScreen/CreateEventScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="What's the Move?" component={HomeScreen}/>
        <Stack.Screen name="Make a Move" component={CreateEventScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
