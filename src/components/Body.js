import { restaurantList } from '../contants';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    console.log(data);
    const json = await data?.json();
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setLoading(false);
  }

  console.log('render');

  // not render component (Early return)
  if (loading) {
    return (
      <div className="restaurant-list">
        {Array(5)
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
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
      <div className="restaurant-list">
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
