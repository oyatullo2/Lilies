import { useEffect, useState } from "react";
import api from "../../Server/api";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  const [foodsData, setFoodsData] = useState([]);
  const handleGetFoods = async () => {
    try {
      const res = await api.get("/foods");
      const interval = setTimeout(() => {
        setFoodsData(res.data);
      }, 2000);
      return () => clearInterval(interval);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetFoods();
  }, []);
  return (
    <>
      <div className="flex w-full transition-all duration-500 ease-in-out gap-[65px] mb-[10px] overflow-y-scroll flex-wrap mx-auto justify-center items-center  h-screen max-h-full">
        {foodsData.length !== 0 ? (
          foodsData.map((food) => (
            <Link className="w-full max-w-[240px]" to={`/foodBox/${food._id}`} key={food._id}>
              <div className="w-full shadow-sm hover:shadow-lg active:shadow-inner transition-all duration-500 ease-in-out max-w-[240px] border rounded-[5px] pt-[30px] flex flex-col justify-center items-center border-[#00302E24]">
                <img
                  className="w-[90px] h-[90px] rounded-full mb-[10px]"
                  src={food.image}
                  alt="Rasm bor"
                />
                <p className="text-[#00302E] font-[600] text-[17px]">
                  {food.name}
                </p>
                <p className="text-[#000000B0] font-[400] mb-[20px] max-w-[172px] mx-auto flex justify-center items-center text-center text-[12px]">
                  {food.description}
                </p>
                <div className="flex max-w-[200px] mx-auto w-full justify-between mb-[20px] items-center">
                  <p className="text-[#00302E] font-[700] text-[15px]">
                    ${food.price}
                  </p>
                  <button className="text-[#06E775] font-[700] text-[15px]">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-screen max-h-full bg-white">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </>
  );
};
