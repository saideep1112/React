import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerLoader from "./ShimmerLoader";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [searchList, setSearchList] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchList}
          name="search"
          onChange={(e) => setSearchList(e.target.value)}
          onKeyUp={() => {
            const filteredResList = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchList.toLowerCase())
            );
            setFilteredList(filteredResList);
          }}
        />
        <button
          onClick={() => {
            const filteredResList = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchList.toLowerCase())
            );
            setFilteredList(filteredResList);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            let filterList = filteredList.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredList(filterList);
          }}
        >
          filter top rated restaurant
        </button>
      </div>
      <div className="rest-cards">
        {filteredList.length === 0 ? (
          <>
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
            <ShimmerLoader />
          </>
        ) : (
          filteredList.map((res) => (
            <Link
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
              className="res-list"
            >
              <RestaurantCard resData={res} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
