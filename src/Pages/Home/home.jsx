import { useContext, useState } from "react";
import { Cart } from "./Cart/cart";
import { MainProvider } from "../../Context/GlobaState";
import { Order } from "../Order/order";
export const Home = () => {
  const [foodShow, setFoodShow] = useState(false);
  const [count, setCount] = useState(0);
  const { counts, setCounts } = useContext(MainProvider);

  const handleShow = (e) => {
    if (foodShow === false && e.target.id !== "plus") {
      setFoodShow(true);
    } else {
      setFoodShow(false);
    }
  };
  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setFoodShow(false);
    }
  };

  const handleCount = (e) => {
    if (e.target.id === "plus") {
      setCount(count + 1);
    }
    if (e.target.id === "minus") {
      count > 0 && setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCounts(counts + 1);
  };
  return (
    <>
      <div className="w-full animate-[HomeRightAnimation_1s_ease-out] transition-all duration-150 ease-in-out overflow-x-hidden h-screen max-h-full flex">
        <div className="flex flex-col w-full">
          <div className="w-full mb-[50px]  mt-[70px] ml-[68px] items-center mx-auto justify-between flex">
            <div className="flex flex-col justify-start">
              <p className="text-[23px] font-[700] text-[#00302E]">
                Good morning, Oghenevwede!
              </p>
              <p className="font-[500] text-[14px] text-[#000000B0]">
                What delicious meal are you craving today?
              </p>
            </div>
            <img
              className="flex mt-[10px] mr-[142px] items-center justify-center object-fill w-full max-w-[50px] h-full max-h-[50px]"
              src="/40w 1 (1).svg"
              alt=""
            />
          </div>
          <div
            onClick={handleShow}
            className="flex mb-[10px] overflow-y-scroll mx-auto justify-evenly w-full flex-wrap"
          >
            <div className="w-full mr-[118px] mb-[68px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col">
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 4.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px] mb-[68px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full shadow-md hover:shadow-xl mb-[68px] transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 3.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px] mb-[68px]  shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 8.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mb-[68px] mr-[118px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 9.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mb-[68px] shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 10.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px] mb-[68px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 4.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px] mb-[68px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full shadow-md hover:shadow-xl mb-[68px] transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 3.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mb-[68px] mr-[118px]  shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 8.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mb-[68px] mr-[118px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 9.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mb-[68px] shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 10.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px] mb-[68px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 4.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px] mb-[68px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full shadow-md hover:shadow-xl mb-[68px] transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 3.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px]  shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 8.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full mr-[118px] shadow-md hover:shadow-xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 9.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
            <div
              onClick={handleShow}
              className="w-full shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out active:shadow-inner border-[1px] border-[#00302E24] rounded-[5px] max-w-[240px] flex justify-center items-center flex-col"
            >
              <img
                className="w-[90px] mt-[35px] h-[90px] mb-[13px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 10.svg"
                alt=""
              />
              <p className="text-[#00302E] mb-[4px] text-[17px] font-[600]">
                Stir Fry Pasta
              </p>
              <p className="text-[#000000B0] text-[12px] font-[500] max-w-[172px] text-center mb-[22px]">
                The in-house pasta and checken by chef Mouse
              </p>
              <div className="flex justify-between w-full px-[29px]">
                <p className="text-[#00302E] text-[13px] font-[700]">
                  N 1,000.00
                </p>
                <p
                  id="plus"
                  onClick={() => {
                    handlePlus();
                    handleShow();
                  }}
                  className="text-[#06E775] text-[13px] font-[600] mb-[23px] cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out"
                >
                  Add to cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handleClose}
        id="overlay"
        style={{ display: foodShow ? "block" : "none" }}
        className="flex animate-[HomeLeftAnimation_6s_ease-out] transition-all duration-150 ease-in-out w-full absolute top-0 right-0 h-screen max-h-screen bg-black/30 z-[-5px]"
      >
        <div className="w-full bg-white max-w-[520px] absolute right-0 top-0 h-screen max-h-full">
          <div className="flex justify-center flex-col items-center">
            <img
              className="mt-[50px] mb-[28px]"
              src="/bon-vivant-qom5MPOER-I-unsplash 6.svg"
              alt="Rasm bor"
            />
            <p className="text-[#00302E] text-[17px] font-[700] mb-[17px]">
              Blueberry Toasts and smoothie
            </p>
            <p className="text-[#000000B0] text-[13px] font-[500] max-w-[394px] mb-[41px] text-center">
              Just have a single bite of this Black Forest pastry and it will
              all make a proper sense to you. The kick of cherry and rich
              chocolate of this super light, airy pastry will definitely make
              you feel "wow". The perfect combination of cherry cream and rich
              chocolate can provide the ultimate fulfillment to your dessert
              craving.
            </p>
            <div className="flex justify-evenly w-full mb-[51px]">
              <p className="text-[#00302E] text-[17px] font-[700]">
                NGN 2000.00
              </p>
              <p className="text-[#00302E] text-[17px] font-[700]">
                10-20 Mins
              </p>
              <p className="text-[#00302E] text-[17px] font-[700]">
                10 Pcs Avail
              </p>
            </div>
            <div className="flex w-full justify-around">
              <div className="flex items-center gap-[13px]">
                <button
                  id="minus"
                  onClick={handleCount}
                  className="py-[16px] bg-[#F3C294] text-[#00302E] text-[31px] font-[700] px-[24px]"
                >
                  -
                </button>
                <p className="text-[#00302E] text-[27px] font-[700]">{count}</p>
                <button
                  id="plus"
                  onClick={handleCount}
                  className="py-[16px] bg-[#F3C294] text-[#00302E] text-[31px] font-[700] px-[20px]"
                >
                  +
                </button>
              </div>
              <button
              onClick={() => {setCount(0);setFoodShow(false)}}
                className="bg-[#00302E] text-[#FFFFFF] text-[17px] font-[700] py-[16px] w-full max-w-[150px]"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cart />
      <Order/>
    </>
  );
};
