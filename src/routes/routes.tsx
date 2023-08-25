import { RouteObject, createHashRouter } from 'react-router-dom'
import { CompareScreen } from '../screens/Compare/CompareScreen'
import { HomeScreen } from '../screens/Home/HomeScreen'
import { NotFoundScreen } from '../screens/NotFound/NotFoundScreen'

const applicationRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/compare/',
    element: <CompareScreen />,
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
]

export const router = createHashRouter(applicationRoutes)
