import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../../Server/api";
import { useEffect } from "react";
import classNames from "classnames";
import { ThreeDot } from "react-loading-indicators";
export const FoodBox = () => {
  const { id } = useParams();
  const [foodBox, setFoodBox] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const handleFoodBoxRequest = async () => {
      const res = await api.get(`/food/${id}`);
      setFoodBox(res.data);
      setLoad(false);
      return () => clearInterval(interval);
    };
    handleFoodBoxRequest();
  }, []);
  return (
    <>
      <div
        className={classNames(
          "mx-auto overflow-x-hidden w-full max-w-[800px] ml-[200px] justify-center items-center h-screen flex absolute max-h-full top-0",
          {
            "animate-[HomeRightAnimation_1s_ease-out] transition-all duration-150 ease-in-out":
              foodBox.name,
            hidden: load === true,
          }
        )}
      >
        <div className="overflow-x-hidden h-full flex mx-auto gap-[50px] justify-between w-full items-center">
          <img
            src={foodBox.image}
            alt="Rasm bor"
            className=" max-w-[450px] rounded-xl"
          />
          <div className="flex text-[#00302E] flex-col ">
            <p className="text-[20px] mb-[8px] font-[600]">{foodBox.name}</p>
            <p className="text-[15px] mb-[8px] font-[400]">
              {foodBox.description}
            </p>
            <p className="text-[18px] font-[700] text-[#33f15c] mb-[8px]">
              Price: {foodBox.price}
            </p>
            <p className="text-[17px] text-[#d82f2f] mb-[8px] font-[600]">
              Available: {foodBox.availableCount}
            </p>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "flex mt-[110px] items-center justify-center w-full h-screen max-h-full bg-white",
          {
            hidden: load === false,
          }
        )}
      >
        <ThreeDot variant="bounce" color="#32cd32" size="medium" text="" textColor="" />
      </div>
    </>
  );
};
