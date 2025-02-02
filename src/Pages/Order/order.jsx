import { useEffect, useState } from "react";
import api from "../../Server/api";
import { ThreeDot } from "react-loading-indicators";
import classNames from "classnames";

export const Order = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderShow, setOrderShow] = useState({});

  useEffect(() => {
    const handleOrder = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/orders");
        const data = await res.data.orders;
        setDatas(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    handleOrder();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center max-h-full">
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

  if (datas.length === 0 && !isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center max-h-full">
        <p className="text-[#00302E] text-[18px] font-[600]">
          No Order Items !
        </p>
      </div>
    );
  }

  const handleShowOrder = (orderId) => {
    setOrderShow((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  return (
    <div className="w-full h-screen px-[10px] overflow-y-scroll gap-[15px] flex flex-col max-h-full">
      {datas.map((item) => (
        <div
          key={item._id}
          className="w-full relative border-[2px] p-[5px] rounded-md border-gray-100 flex items-center justify-between text-[#00302E] shadow-sm hover:shadow-md transition-all duration-500 ease-in-out"
        >
          {orderShow[item._id] ? (
            <i
              onClick={() => handleShowOrder(item._id)}
              className="fa-solid transition-all duration-500 ease-in-out fa-chevron-circle-up absolute top-2 right-2 cursor-pointer text-[20px]"
            ></i>
          ) : (
            <i
              onClick={() => handleShowOrder(item._id)}
              className="fa-solid transition-all duration-500 ease-in-out fa-chevron-circle-down absolute top-2 right-2 cursor-pointer text-[20px]"
            ></i>
          )}
          <div className="flex flex-col">
            <p className="text-[18px] font-[600] text-[#000000]">
              Order ID: {item._id}
            </p>
            <p className="text-[16px] font-[600] text-[#000000]">
              User ID: {item.userId}
            </p>
            <p className="text-[16px] font-[600] text-[#37df61]">
              Amount:{" "}
              {Number(item.totalAmount).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                currencySign: "standard",
              })}
            </p>
            <p className="text-[16px] mb-[20px] font-[600] text-[#7b6565]">
              Created At: {new Date(item.createdAt).toLocaleString()}
            </p>
            <div
              className={classNames(
                "w-full gap-5 duration-500 ease-in-out transition-all max-w-[720px] flex flex-wrap justify-start items-start",
                {
                  hidden: !orderShow[item._id],
                }
              )}
            >
              {item.items.map((food) => (
                <div
                  key={food._id}
                  className="flex transition-all duration-500 ease-in-out flex-col items-center justify-center"
                >
                  <img
                    className="w-[70px] mb-[5px] rounded-full h-[70px] object-fill"
                    src={food.foodId.image}
                    alt="Rasm bor"
                  />
                  <p className="text-[14px] font-[600] max-w-[100px] text-center">
                    {food.quantity} x {food.foodId.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-[600] text-[#37df61]">
              Status: {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
