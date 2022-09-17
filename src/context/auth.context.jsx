import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import userService from "../services/userService";

export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const refreshUser = () => {
    setUser(userService.getUser());
  };
  const createUser = (user) => {
    return userService.createUser(user);
  };
  const login = async (credentials) => {
    const userData = await userService.loginUser(credentials);
    refreshUser();
    return userData;
  };

  const logOut = () => {
    userService.logoutUser();
    refreshUser();
  };

  return (
    <authContext.Provider value={{ createUser, login, logOut, user }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
