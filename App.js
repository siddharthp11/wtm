import AppLayout from "./src/screens/AppLayout";
import PreLogin from "./src/screens/PreLogin";

import { useContext } from "react";
import { AuthContext, AuthProvider } from "./src/firebase/FirebaseAuthProvider";

import { NavigationContainer } from "@react-navigation/native";

export default App => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  )
}

const AppNavigation = () => {
  const { user } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {user ? <AppLayout /> : <PreLogin />}
    </NavigationContainer>
  );
};

