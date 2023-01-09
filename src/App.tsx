import { Provider } from 'react-redux';
import { HomeScreen } from './screens/Home/HomeScreen';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
