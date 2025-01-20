import { CompareScreen } from '@/presentation/screens/Compare/CompareScreen'
import { HomeScreen } from '@/presentation/screens/Home/HomeScreen'
import { NotFoundScreen } from '@/presentation/screens/NotFound/NotFoundScreen'
import { RouteObject, createHashRouter } from 'react-router-dom'

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
