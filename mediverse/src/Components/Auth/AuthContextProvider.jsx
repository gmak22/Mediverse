import { useToast } from '@chakra-ui/react';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem('login');
    setLoggedInUser(null);
    toast({
        title: 'Logout Successful',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
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
