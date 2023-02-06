import { RouteObject, createHashRouter } from 'react-router-dom';
import { CompareScreen } from '../screens/Compare/CompareScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { NotFoundScreen } from '../screens/NotFound/NotFoundScreen';

const home: RouteObject = {
  path: '/',
  element: <HomeScreen />
};

const compare: RouteObject = {
  path: '/compare/',
  element: <CompareScreen />
};

const notFound: RouteObject = {
  path: '*',
  element: <NotFoundScreen />
};

const routes = [home, compare, notFound];

export const router = createHashRouter(routes);
