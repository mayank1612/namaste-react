import { useEffect, useState } from 'react';

export const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const res = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.422706520198265&lng=78.34708231958652&restaurantId=' +
        resId
    );
    const data = await res.json();
    setRestaurant(data.data.cards[0].card.card.info);
  }
  return restaurant;
};
