import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/themes";
import useDarkTheme from "./hooks/useDarkTheme";

import { Header } from "./components/Header/Header";
import { Posts } from "./containers/Posts/Posts";
import { PostDetails } from "./containers/PostDetails/PostDetails";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { ROUTES } from "./constants/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES.POSTS} />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.POSTS,
    element: <Posts />,
  },
  {
    path: ROUTES.POST,
    element: <PostDetails />,
  },
]);

function App() {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <Header onToggleTheme={themeToggler} />
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
}

export default App;
