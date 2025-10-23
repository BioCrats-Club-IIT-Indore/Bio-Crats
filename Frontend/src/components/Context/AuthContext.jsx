import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../Services/API.js';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  const login = async (email, password) => {
    try {
      const data = await apiService.login({ email, password });

      if (data.success && data.token) {
        setToken(data.token);
        setUser(data.user);
        setIsAuthenticated(true);

        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        return { success: true, data };
      }

      return { success: false, message: data.message };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: error.message || 'Login failed' };
    }
  } ;

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

    const register = async (name, email, password) => {
    try {
      const data = await apiService.register({ name, email, password });
        if (data.success) {
        return { success: true, data };
        }
        return { success: false, message: data.message };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, message: error.message || 'Registration failed' };
    }
    };

    return (
    <AuthContext.Provider

        value={{
        user,
        token,
        isAuthenticated,
        login,
        logout,
        register,
    }}>
        {children}
    </AuthContext.Provider>
    );
};
