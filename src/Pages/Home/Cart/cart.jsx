import { useEffect, useState } from "react";
import api from "../../../Server/api";
import classNames from "classnames";
import { ThreeDot } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate("");

  useEffect(() => {
    const handleGetCartData = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/cart");
        const itemsWithCount = res.data.items;
        setCartData(itemsWithCount);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    handleGetCartData();
  }, []);

  const handleCountChange = (id, operation) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item._id === id
          ? {
              ...item,
              count:
                operation === "increment"
                  ? item.count + 1
                  : item.count > 1
                  ? item.count - 1
                  : 1,
            }
          : item
      )
    );
  };

  const handleOrderRequest = async () => {
    const res = await api.post("/order");
    if (res.status === 201) {
      navigate("/order");
    }
  };

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center h-screen max-h-full">
        <ThreeDot
          variant="bounce"
          color="#32cd32"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    );
  }

  if (cartData.length === 0 && !isLoading) {
    return (
      <div className="flex w-full items-center justify-center h-screen max-h-full">
        <p className="font-[600] text-[20px] text-[#00302E]">Cart is empty !</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col h-screen max-h-full overflow-y-scroll gap-[15px]">
        {cartData.map((item) => (
          <div
            key={item._id}
            className="w-full max-w-[1000px] mx-auto max-h-full"
          >
            <div className="flex border-[2px] p-[5px] hover:shadow-lg shadow-sm transition-all duration-500 ease-in-out hover:shadow-[#e9e9e9] rounded-md items-center justify-between text-[#00302E] w-full">
              <div className="flex gap-2 items-center">
                <img
                  className="w-[90px] rounded-full h-[90px]"
                  src={item.foodId.image}
                  alt="Rasm bor"
                />
                <div className="flex flex-col justify-center ">
                  <p className="font-[600] text-[18px]">{item.foodId.name}</p>
                  <p className="font-[700] text-[#05d116b0] text-[17px]">
                    $ {item.foodId.price}
                  </p>
                  <p className="font-[600] text-[15px] text-red-600">
                    Available: {item.foodId.availableCount}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center w-full max-w-[100px]">
                <button
                  onClick={() => handleCountChange(item._id, "decrement")}
                  className="border-none outline-none py-[5px] w-full max-w-[90px] bg-[#00302E] text-white font-[700] text-[22px] rounded-md flex justify-center items-center"
                >
                  -
                </button>
                <p className="font-[700] text-[20px]">{item.count}</p>
                <button
                  onClick={() => handleCountChange(item._id, "increment")}
                  className="border-none outline-none py-[5px] w-full max-w-[90px] bg-[#00302E] text-white font-[700] text-[22px] rounded-md flex justify-center items-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={handleOrderRequest}
          className={classNames(
            "text-white mx-auto font-[600] text-[17px] hover:shadow-md w-full bg-[#00302E] border-none py-[10px] max-w-[300px] mb-[10px] rounded-[5px]",
            {
              hidden: cartData.length === 0,
              block: cartData.length > 0,
            }
          )}
        >
          Make Order
        </button>
      </div>
    </>
  );
};
