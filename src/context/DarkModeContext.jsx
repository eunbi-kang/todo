import { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false); // 기본값 light 모드로 시작하도록 설정
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(()=> {
    const isDark = 
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
   document.documentElement.classList.remove('dark'); 
   localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(DarkModeContext);

