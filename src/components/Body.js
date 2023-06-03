import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOnline } from '../utils/useOnline';

function filterData(searchText, restaurants) {
  // 8 restraunt list = > filtered  rest with "King"
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.422706520198265&lng=78.34708231958652&page_type=DESKTOP_WEB_LISTING'
    ).catch((err) => {
      console.log(err);
    });

    const json = await data?.json();
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setLoading(false);
  }

  const isOnline = useOnline();
  // not render component (Early return)
  if (!isOnline) {
    return <>You are offline</>;
  }
  if (loading) {
    return (
      <div className="flex flex-wrap justify-between">
        {Array(9)
          .fill('')
          .map((el, index) => {
            return <RestaurantCard loading key={index} />;
          })}
      </div>
    );
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="m-3 p-1 border-solid border-spacing-1"
          placeholder="Search restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-purple-800 text-white p-2 rounded-md mx-2"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        {allRestaurants?.length === 0
          ? 'No restaurant'
          : filteredRestaurants?.length === 0
          ? 'No Restraunt match your Filter!!'
          : filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  key={restaurant.data.id}
                  to={'restaurant/' + restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })}
      </div>
    </>
  );
};

export default Body;
