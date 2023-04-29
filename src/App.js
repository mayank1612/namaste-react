import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import RouteError from './components/RouteError';

const AppLayout = () => {
  const [count, setCount] = useState(10);

  // useEffect(() => {}, []);
  const x = setInterval(() => {
    setCount(count - 1);
  }, 1000);
  if (count === 0) {
    clearInterval(x);
  }
  return <>{count}</>;
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
