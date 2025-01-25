import { useContext, useState } from "react";
import { MainProvider } from "../../Context/GlobaState";
import { Outlet } from "react-router-dom";
export const Home = () => {
  const { sideBarMode, setSideBarMode } = useContext(MainProvider);

  const handleShowSidebar = () => {
    if (sideBarMode === false) {
      setSideBarMode(true);
    }
    if (sideBarMode === true) {
      setSideBarMode(false);
    }
  };
  return (
    <>
      <div className="w-full relative animate-[HomeRightAnimation_1s_ease-out] transition-all duration-150 ease-in-out overflow-x-hidden h-screen max-h-full flex">
        <i
          onClick={handleShowSidebar}
          className="fa-solid fa-calendar text-[#00302E] absolute top-2 cursor-pointer hover:bg-black p-[5px] rounded-md text-[20px] transition-all duration-500 ease-in-out hover:text-white left-2"
        ></i>
        <div className="flex flex-col w-full">
          <div className="w-full mb-[50px]  mt-[70px] px-[50px] items-center mx-auto justify-between flex">
            <div className="flex flex-col justify-start">
              <p className="text-[23px] font-[700] text-[#00302E]">
                Good morning, Oghenevwede!
              </p>
              <p className="font-[500] text-[14px] text-[#000000B0]">
                What delicious meal are you craving today?
              </p>
            </div>
            <img
              className="flex mt-[10px]  items-center justify-center object-fill w-full max-w-[50px] h-full max-h-[50px]"
              src="/40w 1 (1).svg"
              alt="Rasm bor"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
