const RestaurantNameMenu = ({ resData }) => {
  const name = resData?.card?.card?.info?.name;
  return (
    <div className="res-name-menu">
      <div>
        <h1 className="res-name-head-menu">{name}</h1>
      </div>
    </div>
  );
};

export default RestaurantNameMenu;
