import { useContext, useState } from "react";
import { MainProvider } from "../../Context/GlobaState";

export const Sidebar = () => {
  const [selectItem, setSelectItem] = useState("Dashboard");
  const { setCloseOrder } = useContext(MainProvider);
  const { counts } = useContext(MainProvider);
  const { setCloseCart } = useContext(MainProvider);

  const handleSelect = (item) => {
    setSelectItem(item);
  };

  return (
    <>
      <div className="w-full animate-[SidebarLeftAnimation_0.6s_ease-out] flex flex-col justify-center">
        <div className="w-full flex justify-center items-center gap-[19px] mt-[50px] mb-[100px]">
          <img src="/Group 15.svg" alt="" />
          <p className="font-[700] text-[33px] text-[#00302E]">Lilies</p>
        </div>
        <div className="w-full flex ml-[25px] flex-col">
          <div
            style={{
              backgroundColor: selectItem === "Dashboard" ? "#EFEFEF" : "",
            }}
            onClick={() => handleSelect("Dashboard")}
            className="flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] w-full justify-start py-[15px] items-start gap-[16px]"
          >
            <i
              style={{
                color: selectItem === "Dashboard" ? "black" : "#BCBCBC",
              }}
              className="transition-all duration-150 ease-in-out fa-solid fa-house text-[#BCBCBC] text-[20px]"
            ></i>
            <p
              style={{
                color: selectItem === "Dashboard" ? "black" : "#BCBCBC",
              }}
              className="transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
            >
              Dashboard
            </p>
          </div>
          <div
            style={{
              backgroundColor: selectItem === "Profile" ? "#EFEFEF" : "",
            }}
            onClick={() => handleSelect("Profile")}
            className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
          >
            <i
              style={{ color: selectItem === "Profile" ? "black" : "#BCBCBC" }}
              className="transition-all duration-150 ease-in-out fa-solid fa-user text-[#BCBCBC] text-[20px]"
            ></i>
            <p
              style={{ color: selectItem === "Profile" ? "black" : "#BCBCBC" }}
              className="transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px] "
            >
              Your profile
            </p>
          </div>
          <div
            style={{ backgroundColor: selectItem === "Order" ? "#EFEFEF" : "" }}
            onClick={() => handleSelect("Order")}
            className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
          >
            <i
              style={{ color: selectItem === "Order" ? "black" : "#BCBCBC" }}
              className=" transition-all duration-150 ease-in-out fa-solid fa-calendar text-[#BCBCBC] text-[20px]"
              onClick={() => setCloseCart(true)}
            ></i>
            <p
              style={{ color: selectItem === "Order" ? "black" : "#BCBCBC" }}
              className="relative w-full transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
              onClick={() => setCloseCart(true)}
            >
              Orders
              <span className="absolute top-0 right-4 w-[24px] rounded-[5px] h-[24px] bg-[#06E775] flex items-center justify-center text-[#000000] font-[600]">6</span>
            </p>
          </div>
          <div
            style={{ backgroundColor: selectItem === "Cart" ? "#EFEFEF" : "" }}
            onClick={() => handleSelect("Cart")}
            className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
          >
            <i
              style={{ color: selectItem === "Cart" ? "black" : "#BCBCBC" }}
              onChange={() => setCloseOrder(true)}
              className=" transition-all duration-150 ease-in-out fa-solid fa-bookmark text-[#BCBCBC] text-[20px]"
            ></i>
            <p
              style={{ color: selectItem === "Cart" ? "black" : "#BCBCBC" }}
              className=" transition-all w-full duration-150 relative ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
              onClick={() => setCloseOrder(true)}
            >
              Your Cart{" "}
              <span className="absolute top-0 right-4 w-[24px] rounded-[5px] h-[24px] bg-[#F3C294] flex items-center justify-center text-[#000000] font-[600]">
                {counts}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
