import { Fragment } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { HeaderComponent } from '../components/Header/HeaderComponent';
import { EHeaderModes } from '../components/Header/HeaderComponent.types';
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

const notFound: RouteObject = {
  path: '*',
  element: (
    <Fragment>
      <HeaderComponent />
      <NotFoundScreen />
    </Fragment>
  )
};

const routes = [home, notFound];

export const router = createBrowserRouter(routes, {
  basename: '/dududex'
});
