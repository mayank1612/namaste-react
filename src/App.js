import ReactDOM from 'react-dom/client';
import { createContext } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './utils/routes';
import { Memo1, Ref1, Ref2 } from './extras/Hooks';

export const CartContext = createContext([]);

const appRoutes = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoutes} />);
// root.render(<Memo1 />);
