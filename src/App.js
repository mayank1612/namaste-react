import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import RouteError from './components/RouteError';
import PureReactComponent from './extras/PureComponent';

const AppLayout = () => {
  return (
    <>
      <PureReactComponent />
      {/* <Header />
      <Body />
      <Footer /> */}
    </>
  );
};
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouteError />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoutes} />);
