const RestaurantNameMenu = ({ resData }) => {
  const name = resData?.cards[2]?.card?.card?.info?.name;
  return (
    <div className="flex justify-center flex-col items-start ml-4 mb-2">
      <div>
        <h1 className="font-extrabold text-2xl tracking-tighter leading-7 my-4 text-[#02060CEB]">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default RestaurantNameMenu;
