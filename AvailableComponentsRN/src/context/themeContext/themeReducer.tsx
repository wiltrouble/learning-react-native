import { DefaultTheme, Theme } from "@react-navigation/native"
import { TableHTMLAttributes } from "react";

type ThemeAction = 
| {type: 'set_light_theme'}
| {type: 'set_dark_theme'}

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark',
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084f6a',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  }
}

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#75cedb',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  }
}

export const themeReducer = (state: ThemeState, action:ThemeAction): ThemeState => {

  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme}
    case 'set_dark_theme':
      return {...darkTheme}
    default:
      return state
  }
}