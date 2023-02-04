import { ThemeProvider, useTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { HomeScreen } from './screens/Home/HomeScreen';
import store from './store/store';

const App = () => {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <HomeScreen />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
