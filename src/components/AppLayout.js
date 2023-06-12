import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../utils/store';
import Header from './Header';
import UserContext from '../utils/userContext';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../App';

export const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Mayank',
    email: 'mayank@gmail.com',
  });

  const [cart, setCart] = useState([]);

  const userRole = 'admin';

  return (
    <Provider store={store}>
      <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
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
      </CartContext.Provider>
    </Provider>
  );
};
