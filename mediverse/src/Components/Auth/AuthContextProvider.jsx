import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('login');
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
