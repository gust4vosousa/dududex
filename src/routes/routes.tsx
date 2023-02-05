import { Fragment } from 'react';
import { RouteObject, createHashRouter } from 'react-router-dom';
import { HeaderComponent } from '../components/Header/HeaderComponent';
import { EHeaderModes } from '../components/Header/HeaderComponent.types';
import { CompareScreen } from '../screens/Compare/CompareScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { NotFoundScreen } from '../screens/NotFound/NotFoundScreen';

const home: RouteObject = {
  path: '/',
  element: (
    <Fragment>
      <HeaderComponent mode={EHeaderModes.home} />
      <HomeScreen />
    </Fragment>
  )
};

const compare: RouteObject = {
  path: '/compare/',
  element: (
    <Fragment>
      <HeaderComponent />
      <CompareScreen />
    </Fragment>
  )
};

const notFound: RouteObject = {
  path: '*',
  element: (
    <Fragment>
      <HeaderComponent />
      <NotFoundScreen />
    </Fragment>
  )
};

const routes = [home, compare, notFound];

export const router = createHashRouter(routes);
