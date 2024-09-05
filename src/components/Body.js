import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerLoader from "./ShimmerLoader";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [searchList, setSearchList] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4787777&lng=78.34653109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
    <div className="w-9/12 flex flex-col justify-center mx-auto mt-20">
      <div className="flex items-center">
        <div className="mx-4 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#ff5200] sm:max-w-md">
          <input
            className="block flex-1 border-0 bg-transparent py-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-0 focus:ring-0 sm:text-sm sm:leading-6"
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
        </div>
        <div>
          <button
            className="px-4 py-2 mx-2 bg-[#ff5200] rounded-md text-white hover:bg-[#ff7433]"
            onClick={() => {
              const filteredResList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchList.toLowerCase())
              );
              setFilteredList(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 mx-2 bg-white rounded-md text-[#ff5200] hover:bg-[#ece9e9] hover:text-[#ff7433]"
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
      </div>
      <div className="mt-10 flex flex-wrap">
        {/* {filteredList.length === 0 ? (
          <>
            <h1>loading</h1>
          </>
        ) : ( */}
        {filteredList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {" "}
            {res.info.promoted ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
        {/* )} */}
      </div>
    </div>
  );
};

export default Body;
