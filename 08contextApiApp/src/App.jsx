
import { useEffect, useState } from 'react'
// import './App.css'
import { ThemeContextProvider } from './Context/Theme'
import Card from './Component/Card';
import ButtonTheme from './Component/ButtonTheme';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  }

  const lightMode = () => {
    setThemeMode("light");
  }


  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="h-screen w-screen bg-white dark:bg-gray-950 flex flex-col items-center  overflow-hidden">
        <div className="justify-center h-auto w-96 m-20">
          <ButtonTheme />
          <Card />
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
