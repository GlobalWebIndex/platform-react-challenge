import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      darkWhite: string;
      transparentWhite: string;
      offsetWhite: string;
      black: string;
      semiTransparentBlack: string;
      transparentBlack: string;
      gray: string;
      lightGray: string;
      lighterGray: string;
      theLightestGray: string;
      darkGray: string;
      blue: string;
      blueHover: string;
      lightBlue: string;
      red: string;
      redHover: string;
      transparentRed: string;
      green: string;
      greenHover: string;
      transparentGreen: string;
      yellow: string;
      lightYellow: string;
      thickLineColor: string;
      inactiveElement: string;
      hoveredElement: string;
      notifications: NotificationsTheme;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }

  export interface NotificationsTheme {
    success: string;
    info: string;
    warning: string;
    error: string;
    default: string;
  }
}
