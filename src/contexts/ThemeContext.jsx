/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, onThemeToggle: handleThemeToggle }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
