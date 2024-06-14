import React, { createContext, useState, useContext } from "react";
const initialUsers = [
  {
    id: 1,
    name: "Amit",
    email: "abc@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Joy",
    email: "joy@gmail.com",
    password: "password456",
  },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
