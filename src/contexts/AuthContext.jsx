import { createContext, useState } from "react";

const userToken = localStorage.getItem("token");

export const AuthContext = createContext({ isLogin: userToken !== null ? true : false });

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(userToken !== null);

  return (
    <>
      <AuthProvider.Provider value={{ isLogin, setIsLogin }}>{children}</AuthProvider.Provider>
    </>
  );
}
