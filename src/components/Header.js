import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Title = () => (
  <Link to="/">
    <img
      className="h-24"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </Link>
);

const navItems = [
  { label: 'Home', redirectTo: '/' },
  { label: 'About', redirectTo: '/about' },
  { label: 'Contact', redirectTo: '/contact' },
  { label: 'Instamart', redirectTo: '/instamart' },
  { label: 'Cart', redirectTo: '/cart' },
];

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-3 bg-pink-50 shadow-lg">
      <Title />
      <div>
        <ul className="flex">
          {navItems.map((item) => {
            return (
              <div key={item.label}>
                <Link to={item.redirectTo}>
                  <li className="mx-2">
                    {item.label}
                    {item.label === 'Cart' && (
                      <span className="mx-1">{cartItems?.length}</span>
                    )}
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
      <span className="p-10 text-red-900 font-bold">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
