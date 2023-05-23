import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../contants';
import { useRestaurant } from '../utils/useRestaurant';

function RestaurantMenu() {
  const param = useParams();
  const restaurant = useRestaurant(param.resId);
  if (!restaurant) {
    return 'Loading...';
  }

  return (
    <div>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      <h2>Restaurant Name: {restaurant.name}</h2>
      <h2>Location: {restaurant.locality}</h2>
      <h2>Cost for two: {restaurant.costForTwoMessage}</h2>
    </div>
  );
}

export default RestaurantMenu;
