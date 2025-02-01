import { useEffect, useState } from "react";
import api from "../../Server/api";
import { ThreeDot } from "react-loading-indicators";

export const Order = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  if(datas.length === 0 && !isLoading){
    return (
      <div className="w-full h-screen flex items-center justify-center max-h-full">
        <p className="text-[#00302E] text-[18px] font-[600]">No Order Items !</p>
      </div>
    )
  }

  return (
    <>
      <div className="w-full h-screen px-[10px] overflow-y-scroll gap-[15px] flex flex-col max-h-full">
          {datas.map((item) => (
            <div
              key={item._id}
              className="w-full border-[2px] p-[5px] rounded-md border-gray-100 flex items-center justify-between text-[#00302E] shadow-sm hover:shadow-md transition-all duration-500 ease-in-out"
            >
              <div className="flex flex-col">
                <p className="text-[18px] font-[600] text-[#000000]">
                  Order ID: {item._id}
                </p>
                <p className="text-[16px] font-[600] text-[#000000]">
                  User ID: {item.userId}
                </p>
                <p className="text-[16px] font-[600] text-[#37df61]">
                  Amout:{" "}
                  {Number(item.totalAmount).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    currencySign: "standard",
                  })}
                </p>
                <p className="text-[16px] font-[600] text-[#7b6565]">
                  Created At: {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[16px] font-[600] text-[#37df61]">
                  Status: {item.status}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};
