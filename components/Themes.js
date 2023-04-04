import { createContext } from "react";

export const themes = {
    light: {
      background: "#efefef",
      color: "#232323",
      padding: 10
    },
    dark: {
      background: "#232323",
      color: "#efefef",
      padding: 10
    }
}

export const ThemeContext = createContext();