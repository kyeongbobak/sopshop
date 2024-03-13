import { createContext, useState } from "react";

const userToken = localStorage.getItem("token");

export const AuthContext = createContext({ isLogin: userToken !== null ? true : false });

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(userToken);

  return (
    <>
      <AuthProvider.Provider value={{ token, setToken }}>{children}</AuthProvider.Provider>
    </>
  );
}
