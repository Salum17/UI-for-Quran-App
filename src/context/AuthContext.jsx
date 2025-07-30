// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessToken();
      if (token) {
        setAccessToken(token);
      }
    };

    fetchToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
