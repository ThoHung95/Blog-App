'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

function getFromLocalStorage() {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
    // Default theme if localStorage is not available
  }
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(getFromLocalStorage());

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
