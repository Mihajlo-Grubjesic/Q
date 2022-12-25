import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
import useDarkTheme from './hooks/useDarkTheme';

import Header from './containers/Header/Header';
import Posts from './containers/Posts/Posts';
import PostDetails from './containers/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { Loader } from './components/Loader/Loader';
import { ROUTES } from './constants/routes';
import { usePosts } from './containers/Posts/hooks/usePosts';

function App() {
  const { theme, themeToggler } = useDarkTheme();
  const { postsData, error, loading } = usePosts();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;
  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  const PostsRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={ROUTES.POSTS} />,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTES.POSTS,
      element: <Posts posts={postsData} />,
    },
    {
      path: ROUTES.POST,
      element: <PostDetails posts={postsData} />,
    },
  ]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header onToggleTheme={themeToggler} />
      <RouterProvider router={PostsRoutes} />
    </ThemeProvider>
  );
}

export default App;
