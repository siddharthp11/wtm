import React, { useState } from "react";
import CasClient from "react-cas-client";

const CAS_ENDPOINT = "https://sso.gatech.edu/cas";

const casClient = new CasClient(CAS_ENDPOINT);

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      await casClient.auth();
    } catch (error) {
      // Error handling
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleLogin}>Login with CAS</button>
      )}
    </div>
  );
};

export default LoginScreen;