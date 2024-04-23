import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AuthContext.Provider value={{ token, setToken, isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
