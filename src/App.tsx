import { ThemeProvider, useTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AppContainer } from './App.styles';
import { router } from './routes/routes';
import store from './store/store';

const App = () => {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <RouterProvider router={router} />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
