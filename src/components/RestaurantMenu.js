import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../contants';

function RestaurantMenu() {
  const param = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  console.log({ param });
  async function getRestaurantInfo() {
    const res = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.422706520198265&lng=78.34708231958652&restaurantId=' +
        param.resId
    );
    const data = await res.json();
    setRestaurant(data.data.cards[0].card.card.info);
    console.log({ data });
  }
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
