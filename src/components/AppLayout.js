import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../utils/store';
import Header from './Header';
import UserContext from '../utils/userContext';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Mayank',
    email: 'mayank@gmail.com',
  });

  const userRole = 'admin';

  return (
    <Provider store={store}>
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
    </Provider>
  );
};
