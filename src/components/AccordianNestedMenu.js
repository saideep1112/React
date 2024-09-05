import AccordianNestedArrowMenu from "./AccordianNestedArrowMenu";

const AccordianNestedMenu = ({ menuData }) => {
  const { title, categories } = menuData?.card?.card;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-6">
        <div className="font-extrabold text-lg leading-5 tracking-tight text-[#02060CEB]">
          {title}
        </div>
        {categories.map((category) => (
          <AccordianNestedArrowMenu menuData={category} key={category.title} />
        ))}
      </div>
      <div className="h-4 bg-[#02060C0D]"></div>
    </div>
  );
};

export default AccordianNestedMenu;
