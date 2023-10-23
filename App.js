import AppLayout from "./src/screens/AppLayout";
import PreLogin from "./src/screens/PreLogin";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./src/firebase/FirebaseAuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import { DataProvider } from "./src/firebase/FirebaseDataProvider";

export default App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <AppNavigation />
      </DataProvider>
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

