import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import ShimmerLoader from "./ShimmerLoader";
import LocationComponent from "./LocationComponent"; // Import LocationComponent

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchList, setSearchList] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextOffset, setNextOffset] = useState(null);
  const [widgetOffsets, setWidgetOffsets] = useState({});
  const [csrfToken, setCsrfToken] = useState("");
  const observer = useRef();
  const scrollPosition = useRef(0); // Ref to store scroll position

  // Location data from LocationComponent
  const { latitude, longitude, error } = LocationComponent();

  // Save the current scroll position before re-rendering
  const saveScrollPosition = () => {
    scrollPosition.current =
      window.pageYOffset || document.documentElement.scrollTop;
  };

  // Restore the saved scroll position after re-rendering
  const restoreScrollPosition = () => {
    window.scrollTo(0, scrollPosition.current);
  };

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${
            latitude || 17.4787777
          }&lng=${
            longitude || 78.34653109999999
          }&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const json = await response.json();
        const initialRestaurants =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        const initialWidgetOffsets = json?.data?.pageOffset.widgetOffset || {};
        const initialNextOffset = json?.data?.pageOffset.nextOffset || null;

        setRestaurantList(initialRestaurants);
        setFilteredList(initialRestaurants);
        setWidgetOffsets(initialWidgetOffsets);
        setNextOffset(initialNextOffset);
        setHasMore(!!initialNextOffset);
        setCsrfToken(json.csrfToken);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
      setLoading(false);
    };

    if (latitude && longitude) {
      fetchInitialData();
    }
  }, [latitude, longitude]); // Depend on latitude and longitude

  // Restore scroll position after restaurant list changes
  useLayoutEffect(() => {
    restoreScrollPosition();
  }, [restaurantList]); // Runs after the restaurantList updates

  // Fetch additional data on scroll
  const fetchData = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    saveScrollPosition(); // Save scroll position before fetching data

    try {
      const response = await fetch("http://localhost:5000/api/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters: {},
          lat: latitude || "17.4787777",
          lng: longitude || "78.34653109999999",
          nextOffset,
          page_type: "DESKTOP_WEB_LISTING",
          seoParams: {
            seoUrl: "https://www.swiggy.com/",
            pageType: "FOOD_HOMEPAGE",
            apiName: "FoodHomePage",
          },
          widgetOffset: widgetOffsets,
          _csrf: csrfToken,
        }),
      });

      const json = await response.json();
      const data = json.data;
      const newRestaurants =
        data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];
      const newNextOffset = data.pageOffset.nextOffset;
      const newWidgetOffsets = data.pageOffset.widgetOffset;

      if (newRestaurants.length > 0) {
        setRestaurantList((prevList) => [...prevList, ...newRestaurants]);
        setFilteredList((prevList) => [...prevList, ...newRestaurants]);
        setNextOffset(newNextOffset);
        setWidgetOffsets(newWidgetOffsets);
        setHasMore(!!newNextOffset);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching additional data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        fetchData();
      }
    };

    const debounceHandleScroll = () => {
      if (observer.current) {
        clearTimeout(observer.current);
      }
      observer.current = setTimeout(handleScroll, 200);
    };

    window.addEventListener("scroll", debounceHandleScroll);
    return () => window.removeEventListener("scroll", debounceHandleScroll);
  }, [fetchData]);

  const handleSearch = () => {
    const filteredResList = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchList.toLowerCase())
    );
    setFilteredList(filteredResList);
  };

  const handleFilter = () => {
    const filteredResList = filteredList.filter(
      (res) => res.info.avgRating >= 4
    );
    setFilteredList(filteredResList);
  };

  return (
    <div className="xl:w-9/12 lg:w-9/12 md:9/12 max-sm:9/12 flex flex-col justify-center mx-auto mt-40">
      <div className="flex items-center">
        <div className="mx-4 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#ff5200] sm:max-w-md">
          <input
            className="block flex-1 border-0 bg-transparent py-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-0 focus:ring-0 sm:text-sm sm:leading-6"
            type="text"
            value={searchList}
            name="search"
            onChange={(e) => setSearchList(e.target.value)}
            onKeyUp={handleSearch}
          />
        </div>
        <div>
          <button
            className="px-4 py-2 mx-2 bg-[#ff5200] rounded-md text-white hover:bg-[#ff7433]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 mx-2 bg-white rounded-md text-[#ff5200] hover:bg-[#ece9e9] hover:text-[#ff7433]"
            onClick={handleFilter}
          >
            Filter Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 max-sm:grid-cols-2 gap-5">
        {loading ? (
          <ShimmerLoader />
        ) : (
          filteredList.map((res) => (
            <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
              <RestaurantCard resData={res} />
            </Link>
          ))
        )}
        {!hasMore && <p>No more restaurants to load</p>}
      </div>
    </div>
  );
};

export default Body;
