import { CircularProgress } from '@mui/material';

import { lazy } from 'react';
import Body from '../components/Body';
import { Suspense } from 'react';
import ProfileClass from '../components/ProfileClass';
import RouteError from '../components/RouteError';
import RestaurantMenu from '../components/RestaurantMenu';
import Instamart from '../components/Instamart';
import Contact from '../components/Contact';
import { AppLayout } from '../components/AppLayout';
import Cart from '../components/Cart';

const About = lazy(() => {
  return import('../components/About');
});

export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            // Outlet should be present in parent
            path: 'profile', // profile means relative to parent, / means relative to root
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: <Instamart />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
];
