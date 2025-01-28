import { useContext } from "react";
import { MainProvider } from "../../Context/GlobaState";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const { setCloseOrder } = useContext(MainProvider);
  const { counts } = useContext(MainProvider);
  const { setCloseCart } = useContext(MainProvider);
  const local = useLocation();

  const isActive = (path) => local.pathname === path;

  return (
    <>
      <div className="w-full animate-[SidebarLeftAnimation_0.6s_ease-out] flex flex-col justify-center">
        <div className="w-full flex justify-center items-center gap-[19px] mt-[50px] mb-[100px]">
          <img src="/Group 15.svg" alt="" />
          <p className="font-[700] text-[33px] text-[#00302E]">Lilies</p>
        </div>
        <div className="w-full flex ml-[25px] flex-col">
          <Link to={"/home"}>
            <div
              style={{
                backgroundColor: isActive("/home") ? "#EFEFEF" : "",
              }}
              className="flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] w-full justify-start py-[15px] items-start gap-[16px]"
            >
              <i
                style={{
                  color: isActive("/home") ? "black" : "#BCBCBC",
                }}
                className="transition-all duration-150 ease-in-out fa-solid fa-house text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{
                  color: isActive("/home") ? "black" : "#BCBCBC",
                }}
                className="transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
              >
                Dashboard
              </p>
            </div>
          </Link>
          <Link to={"/profile"}>
            <div
              style={{
                backgroundColor: isActive("/profile") ? "#EFEFEF" : "",
              }}
              className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
            >
              <i
                style={{
                  color: isActive("/profile") ? "black" : "#BCBCBC",
                }}
                className="transition-all duration-150 ease-in-out fa-solid fa-user text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{
                  color: isActive("/profile") ? "black" : "#BCBCBC",
                }}
                className="transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px] "
              >
                Your profile
              </p>
            </div>
          </Link>
          <Link to={"/order"}>
            <div
              style={{
                backgroundColor: isActive("/order") ? "#EFEFEF" : "",
              }}
              className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
            >
              <i
                style={{ color: isActive("/order") ? "black" : "#BCBCBC" }}
                className=" transition-all duration-150 ease-in-out fa-solid fa-calendar text-[#BCBCBC] text-[20px]"
                onClick={() => setCloseCart(true)}
              ></i>
              <p
                style={{ color: isActive("/order") ? "black" : "#BCBCBC" }}
                className="relative w-full transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
                onClick={() => setCloseCart(true)}
              >
                Orders
              </p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div
              style={{
                backgroundColor: isActive("/cart") ? "#EFEFEF" : "",
              }}
              className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
            >
              <i
                style={{ color: isActive("/cart") ? "black" : "#BCBCBC" }}
                onChange={() => setCloseOrder(true)}
                className=" transition-all duration-150 ease-in-out fa-solid fa-bookmark text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{ color: isActive("/cart") ? "black" : "#BCBCBC" }}
                className=" transition-all w-full duration-150 relative ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
                onClick={() => setCloseOrder(true)}
              >
                Your Cart{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
