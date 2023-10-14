import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import InsideLayout from './src/screens/index'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useState, useEffect } from 'react'

import { auth } from './src/firebase/config'

const Stack = createStackNavigator()

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      console.log("User: " + user)
      setUser(user)
    })
  },[])

  // login screen if user exists, else move in index.js 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user? (
          <Stack.Screen name= "InsideStack" component={InsideLayout} options={{headerShown:false}}/>
        ):(
          <Stack.Screen name= "LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
