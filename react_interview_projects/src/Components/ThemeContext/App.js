import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./Contexts/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

export default function ThemeApp() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* {ThemeButton} */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto"></div>
          {/* {Card} */}
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}
