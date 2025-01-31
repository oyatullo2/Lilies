import { useEffect, useState } from "react";
import api from "../../Server/api";
import { Link } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
export const Dashboard = () => {
  const [foodsData, setFoodsData] = useState([]);

  useEffect(() => {
    const handleGetFoods = async () => {
      try {
        const res = await api.get("/foods");
        setFoodsData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    handleGetFoods();
  }, []);

  const handleAddToCart = (id) => async (event) => {
    event.preventDefault();
    const res = await api.post("/add-cart", {
      foodId: id,
      quantity: 1,
    });
  };

  return (
    <>
      <div className="flex w-full transition-all duration-500 ease-in-out gap-[65px] mb-[10px] overflow-y-scroll flex-wrap mx-auto justify-center items-center  h-screen max-h-full">
        {foodsData.length !== 0 ? (
          foodsData.map((food) => (
            <Link
              className="w-full max-w-[240px]"
              to={`/foodBox/${food._id}`}
              key={food._id}
            >
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
                  <button
                    onClick={handleAddToCart(food?._id)}
                    className="text-[#06E775] font-[700] text-[15px]"
                    id="addToCart"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <ThreeDot
            variant="bounce"
            color="#32cd32"
            size="medium"
            text=""
            textColor=""
          />
        )}
      </div>
    </>
  );
};
