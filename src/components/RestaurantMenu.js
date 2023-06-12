import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../contants';
import { useRestaurant } from '../utils/useRestaurant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { useContext } from 'react';
import { CartContext } from '../App';

function RestaurantMenu() {
  const param = useParams();
  const { info, menu } = useRestaurant(param.resId);
  const dispatch = useDispatch();
  const { setCart } = useContext(CartContext);
  const addItemInCart = (item) => {
    dispatch(addItem(item));
  };
  const addItemInContextCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  if (!info) {
    return 'Loading...';
  }
  return (
    <div className="flex m-3 ">
      <div>
        <img src={IMG_CDN_URL + info.cloudinaryImageId} />
        <h2>Restaurant Name: {info.name}</h2>
        <h2>Location: {info.locality}</h2>
        <h2>Cost for two: {info.costForTwoMessage}</h2>
      </div>
      <div className="m-3">
        <ul>
          {menu.map((item) => {
            const { name } = item.card.info;
            return (
              <div key={name} className="flex">
                <li>{name}</li>
                <button
                  onClick={() => {
                    addItemInCart(item.card.info);
                    addItemInContextCart(item.card.info);
                  }}
                  className="m-2 p-1 bg-green-300 rounded-md"
                >
                  Add
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
