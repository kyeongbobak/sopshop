import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{ token, login, logout, isLoggedIn }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
