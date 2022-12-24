import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/themes";
import useDarkTheme from "./hooks/useDarkTheme";

import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

function App() {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <Header onToggleTheme={themeToggler} />
        <Card />
      </>
    </ThemeProvider>
  );
}

export default App;
