import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/themes';

export function renderWithThemeAndRouter(
  children: React.ReactElement,
  theme?: DefaultTheme,
) {
  return render(
    <ThemeProvider theme={theme ? theme : lightTheme}>
      <Router>{children}</Router>
    </ThemeProvider>,
  );
}
