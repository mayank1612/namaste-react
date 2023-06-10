import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RouteError from './components/RouteError';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import ProfileClass from './components/ProfileClass';
import { CircularProgress } from '@mui/material';
import Instamart from './components/Instamart';
import UserContext from './utils/userContext';

const About = lazy(() => {
  return import('./components/About');
});

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Mayank',
    email: 'mayank@gmail.com',
  });

  const userRole = 'admin';

  return (
    <>
      <Header />
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
          userRole,
        }}
      >
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};
const appRoutes = createBrowserRouter([
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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoutes} />);
