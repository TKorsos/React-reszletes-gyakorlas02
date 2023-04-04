import React, { lazy, Suspense, useState } from "react";
import './App.css';
import { ThemeContext } from './components/Themes';

const Main = lazy( () => import( './components/Main' ) );

export default function App() {

  const[color, setColor] = useState( "dark" );

  const toggleColor = () => {
    setColor(color === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={color}>
      <Suspense>
        <Main colorToggle={toggleColor} />
      </Suspense>
    </ThemeContext.Provider>
  );
}
