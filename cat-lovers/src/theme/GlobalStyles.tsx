import {
  createGlobalStyle,
  DefaultTheme,
  NotificationsTheme,
} from 'styled-components';

const notificationsTheme: NotificationsTheme = {
  success: 'rgb(0, 200, 81)',
  info: 'rgb(1, 87, 155)',
  warning: 'rgb(241, 196, 15)',
  error: 'rgb(226, 0, 15)',
  default: 'rgb(68, 81, 89)',
};

export const theme: DefaultTheme = {
  color: {
    white: 'rgb(255, 255, 255)',
    darkWhite: 'rgb(244, 244, 244)',
    transparentWhite: 'rgba(255, 255, 255, 0.3)',
    offsetWhite: 'rgba(0, 0, 0, 0.125)',
    black: 'rgb(0, 0, 0)',
    semiTransparentBlack: 'rgba(0, 0, 0, 0.5)',
    transparentBlack: 'rgba(0, 0, 0, 0.25)',
    gray: 'rgb(87, 87, 86)',
    lightGray: 'rgb(112, 112, 112)',
    lighterGray: 'rgb(175, 175, 175)',
    theLightestGray: 'rgb(211, 211, 211)',
    darkGray: 'rgb(69, 69, 68)',
    blue: 'rgb(1, 87, 155)',
    blueHover: 'rgb(1, 70, 130)',
    lightBlue: 'rgb(167, 202, 237)',
    red: 'rgb(226, 0, 15)',
    redHover: 'rgb(181, 0, 12)',
    transparentRed: 'rgba(226, 0, 15, 0.1)',
    green: 'rgb(26, 188, 156)',
    greenHover: 'rgb(23, 169, 140)',
    transparentGreen: 'rgba(26, 188, 156, 0.1)',
    yellow: 'rgb(255,238,51)',
    lightYellow: 'rgb(255,250,189)',
    thickLineColor: 'rgba(0, 0, 0, 0.3)',
    inactiveElement: 'rgb(180,180,180)',
    hoveredElement: 'rgb(240, 217, 100)',
    notifications: notificationsTheme,
  },
  fontSize: {
    xs: '1.2rem',
    s: '1.4rem',
    m: '1.8rem',
    l: '2rem',
    xl: '2.5rem',
    xxl: '3rem',
  },
};

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-tap-highlight-color: transparent;
}
html {
  font-size: 62.5%; 
}

body{
  overflow-x: hidden;
  font-size: 1.6rem;
}
`;
