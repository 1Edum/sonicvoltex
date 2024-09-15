'use client'

import React, { createContext, ReactNode,useState } from 'react';

// Criando o contexto

interface ThemeContextProps {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) =>{
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
  