import { useEffect, useState } from 'react';

export const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const res = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.422706520198265&lng=78.34708231958652&restaurantId=' +
        resId
    );
    const data = await res.json();
    setRestaurant({
      info: data.data.cards[0].card.card.info,
      menu:
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards ??
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .categories[0].itemCards,
    });
    console.log(data);
  }
  return restaurant;
};
