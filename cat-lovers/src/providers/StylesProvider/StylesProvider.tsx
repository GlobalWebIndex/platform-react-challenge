import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'theme/GlobalStyles';
import { StylesProviderProps } from 'providers/StylesProvider/types';

export const StylesProvider = ({ children }: StylesProviderProps) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
