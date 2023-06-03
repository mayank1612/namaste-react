import { useState } from 'react';
import { Link } from 'react-router-dom';

const Title = () => (
  <Link to="/">
    <img
      className="h-24"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navItems = [
    { label: 'Home', redirectTo: '/' },
    { label: 'About', redirectTo: '/about' },
    { label: 'Contact', redirectTo: '/contact' },
    { label: 'Cart', redirectTo: '/cart' },
  ];
  return (
    <div className="flex justify-between items-center px-3 bg-pink-50 shadow-lg">
      <Title />
      <div>
        <ul className="flex">
          {navItems.map((item) => {
            return (
              <Link to={item.redirectTo} key={item.label}>
                <li className="mx-2">{item.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
