import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const storedIsGuest = localStorage.getItem('isGuest');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsGuest(false);
    } else if (storedIsGuest === 'true') {
      setIsGuest(true);
    }

    setIsLoading(false);
  }, []);

  const login = (token, user) => {
    setToken(token);
    setUser(user);
    setIsGuest(false);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.removeItem('isGuest');
  };

  const register = (token, user) => {
    login(token, user);
  };

  const continueAsGuest = () => {
    setIsGuest(true);
    setUser(null);
    setToken(null);
    localStorage.setItem('isGuest', 'true');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsGuest(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isGuest');
  };

  const updateUserData = (newUserData) => {
    setUser(newUserData);
    localStorage.setItem('user', JSON.stringify(newUserData));
  };

  const value = {
    user,
    token,
    isGuest,
    isLoading,
    login,
    register,
    continueAsGuest,
    logout,
    updateUserData,
    isAuthenticated: !!token || isGuest
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

