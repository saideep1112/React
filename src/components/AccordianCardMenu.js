import { TiStarFullOutline } from "react-icons/ti";
import { MdLocalOffer } from "react-icons/md";

const AccordianCardMenu = ({ cardData }) => {
  const {
    name,
    itemAttribute,
    price,
    defaultPrice,
    ratings,
    description,
    imageId,
    offerTags,
    isBestseller,
  } = cardData?.card?.info;
  return (
    <div className="flex flex-col">
      <div className="flex justify-between py-4">
        <div className="flex flex-col">
          <div className="flex">
            <div>
              {itemAttribute.vegClassifier === "NONVEG" ? (
                <img
                  className="w-5 h-5"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO2Xv0oDQRDGtzOXmRi1VLGyt5AZgwh5E/++g4jiIxmtRNTsFIKgopZG7Iy9CbFX5gx2wSS32b2Q/WDgiluY383OzHfGREVFReVSwvidpzATC2ACSyJAYEmswCRV4KIyPVfn0q4QnAlDQxi+utGwBKeyVtq52SjP5g7gtmISS3gkBO3/RyK0LOOhnjF5ALhcT+Yt4/2gc90yPl+tFpaCAggni0L4MexysoTN60qyEARAr4AQPmbdsJbxQaqm4B1ACI+dWQXCA68AOm36a9h+A1q9ptNIACzjnrvksVuF0rY3gN857xbAMtS8AViCN+cVYGj4BOg4rwBBZ6wBhKDtDUAYXkfQAy/eAFJj5r4HTrwBqKt0DVDn4qbfRcbQcnh9PmWlPOMNQKWW2B0A7g+bx9AAasBSI5b97t8FMXMqtcJqiTN8+Xf9n8iaR6aDmkD6FQdP/in4D83fu1VTUEvcT2Nrw+qdP182U67zyHxQLbG6St0Tuph0Y6ehzww1S8WtXtMmFwCjkESAwJJYgXGvgOQkzMQBREVFRRkf+gHhzjmciMgUEwAAAABJRU5ErkJggg=="
                ></img>
              ) : (
                <img
                  className="w-5 h-5"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2XwUoDQQyG56be1KMVH8OJTWSvfQq1+g4iFfEoQpPaB7H2Naqox1a8qXdb6r2SrR6LdXd2Zkvnh8DC7sB8m0nmjzFRUVFRpRQITcoUZmkBTGBBBAgsiBlYpgwAw+ZeC4+BsWuZBiD4paHPlvHOMtXpijZKBwAMa7ZJ58A0+rsl4hCEGrrGlAGgel3dskz3/+3rlukZb3AnKMBuO9m2Qh+ZLyjGd2CoBAFIjw3jY+5blukhuUxWvQNYwQtXNsEKnnkF0G4zX8HOGzic1Z0KAsATd5unaRaa+0c+AbrOAYQ63gCs0KtzAKaBPwDGsXsAHC80ADCNvAGA4EsBNdD3BqDGrIAM3HoEoLp7ADzwe5FNXaWrAv5MWsm6N4Cf9w2HGTjNuo/MAGrA1IjlL17sBTFz6TcMldQSZwbAN50n8u4j/0Aj2Mvw55+CDzS/0iOglniewtaC1TNfa9dWXO8j90K1xOoq0wFeqK83dhr6LNQBwcNZ3aYUAEUIIkBgQczAomcAShJm6QCioqKijA99A3yCPIRsuFUZAAAAAElFTkSuQmCC"
                ></img>
              )}
            </div>
            {isBestseller && (
              <div className="ml-1 text-[#FF5200] font-normal text-sm">
                Bestseller
              </div>
            )}
          </div>
          <div className="font-bold text-lg leading-5 tracking-tight text-[#02060CBF]">
            {name}
          </div>
          <div className="mt-1 flex items-center">
            <div className="font-normal text-[16px] leading-5 tracking-tight text-[#02060CEB]">
              ₹ {price ? price / 100 : defaultPrice / 100}
            </div>
            {offerTags && (
              <div className="flex ml-1 mt-1">
                <div>
                  <MdLocalOffer
                    size={14}
                    className="origin-center rotate-90 text-[#1BA672]"
                  />
                </div>
                <div className="text-[#02060C99] font-bold text-xs tracking-tight leading-3">
                  {offerTags[0]?.title + " " + offerTags[0]?.subTitle}
                </div>
              </div>
            )}
          </div>
          {ratings?.aggregatedRating?.rating && (
            <div className="flex mt-3">
              <div className="mt-[1px]">
                <TiStarFullOutline className="text-[#1BA672]" size={14} />
              </div>
              <div className="text-[#1BA672] ml-0.5 font-bold text-sm leading-4 tracking-[-0.1px]">
                {ratings?.aggregatedRating?.rating}
              </div>
              <div className="ml-0.5 font-normal text-sm leading-4 tracking-tight text-[#02060C99]">
                {"(" + ratings?.aggregatedRating?.ratingCountV2 + ")"}
              </div>
            </div>
          )}
          {description && (
            <div className="flex">
              <div className="mt-3 font-normal text-[16px] leading-5 tracking-tight text-[#02060C99] overflow-hidden text-ellipsis ... break-all">
                {description}
              </div>
            </div>
          )}
        </div>
        <div>
          {imageId && (
            <div className="h-36 w-[156px] ml-14">
              <img
                className="h-36 w-[156px] aspect-[156/144]"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  imageId
                }
              ></img>
            </div>
          )}
        </div>
      </div>
      <div className="border-b border-b-[#d3d3d3] h-[0.5px] my-5"></div>
    </div>
  );
};

export default AccordianCardMenu;
