import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainProvider } from "../../Context/GlobaState";
export const Foods = () => {
  const { mode, setMode } = useContext(MainProvider);

  const handleMode = () => {
    const modeColor = localStorage.getItem("Mode");
    if (mode === "dark") {
      setMode(modeColor);
      localStorage.setItem("Mode", "light");
    }
    if (mode === "light") {
      setMode(modeColor);
      localStorage.setItem("Mode", "dark");
    }
  };
  return (
    <>
      <div className="flex flex-col w-full  bg-[#00302E]">
        <div className="flex mt-[30px] items-center justify-center flex-col max-w-[1500px] mx-auto w-full">
          <div className="w-full mb-[161px] flex justify-between max-w-[1250px] items-center">
            <div className="flex gap-[22px] items-center justify-center">
              <img src="/Group 15.svg" alt="Rasm bor" />
              <p className="font-[700] text-[32px] text-[#FFFFFF]">Lilies</p>
            </div>
            <div className="flex items-center justify-center">
              <div
                onClick={handleMode}
                className="w-[25px] shadow-md shadow-white flex justify-center items-center h-[25px] bg-transparent rounded-full mr-[20px]"
              >
                {mode === "light" ? (
                  <i className="fa-solid fa-moon"></i>
                ) : (
                  <i className="fa-solid fa-sun"></i>
                )}
              </div>
              <p className="font-[500] text-[21px] text-[#FBDDBB] mr-[45px] cursor-pointer">
                Home
              </p>
              <Link to={"/login"}>
                <p className="font-[500] text-[21px] text-[#FFFFFF] mr-[45px] cursor-pointer">
                  Login
                </p>
              </Link>
              <Link to={"/register"}>
                <button className="text-[#00302E] font-[600] text-[17px] bg-[#E2B887] border-none py-[10px] w-full px-[38px] rounded-[7px] outline-none">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-full mb-[150px] justify-around">
            <div className="flex justify-center flex-col">
              <p className="font-[700] mb-[21px] leading-[67px] max-w-[650px] text-[64px] text-[#FFFFFF]">
                Order <span className="text-[#FBDDBB]">food</span> anytime,
                anywhere
              </p>
              <p className="mb-[21px] font-[400] text-[18px] max-w-[609px]">
                Browse from our list of specials to place your order and have
                food delivered to you in no time. Affordable, tasty and fast!
              </p>
              <img
                src="/Badges (2).svg"
                alt="rasm bor"
                className="max-w-[282px]"
              />
            </div>
            <img src="/bon-vivant-qom5MPOER-I-unsplash 1.svg" alt="" />
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <p className="text-[#FFFFFFDE] font-[700] text-[36px] font-sans mb-[35px]">
              Special Meals of the day!
            </p>
            <p className="font-[400] text-[18px] text-[#FFFFFFDE] mb-[96px] max-w-[609px] mx-auto text-center">
              Check our sepecials of the day and get discounts on all our meals
              and swift delivery to what ever location within Ilorin.
            </p>
          </div>
          <div className="flex mb-[269px] justify-around w-full">
            <div className="flex flex-col justify-center items-center">
              <img
                className="mb-[5px] animate-[RotateAnimation_50s_linear_infinite] transition-all ease-in-out duration-500"
                src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                alt="Rasm bor"
              />
              <p className="text-[#FBDDBB] mb-[14px] font-[700] text-[27px]">
                Stir fry Pasta
              </p>
              <p className="font-[400] text-[18px] text-[#FFFFFFD4] max-w-[288px] text-center">
                Stir fry pasta yada yada yada because of Sesan
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="animate-[RotateAnimation_50s_linear_infinite] transition-all ease-in-out duration-500 mb-[5px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 3.svg"
                alt="Rasm bor"
              />
              <p className="text-[#FBDDBB] mb-[14px] font-[700] text-[27px]">
                Meat Balls
              </p>
              <p className="font-[400] text-[18px] text-[#FFFFFFD4] max-w-[288px] text-center">
                Stir fry pasta yada yada yada because of Sesan
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="animate-[RotateAnimation_50s_linear_infinite] transition-all ease-in-out duration-500 mb-[5px]"
                src="/bon-vivant-qom5MPOER-I-unsplash 4.svg"
                alt="Rasm bor"
              />
              <p className="text-[#FBDDBB] mb-[14px] font-[700] text-[27px]">
                Burger Meal
              </p>
              <p className="font-[400] text-[18px] text-[#FFFFFFD4] max-w-[288px] text-center">
                Stir fry pasta yada yada yada because of Sesan
              </p>
            </div>
          </div>
          <div className="flex mb-[201px] justify-between items-center w-full">
            <div className="flex  w-full justify-center items-center flex-col">
              <p className="font-[700] text-[36px] text-[#FBDDBB] mb-[32px]">
                Get notified when we update!
              </p>
              <p className="font-[400] ml-[30px] text-[18px] text-[#FFFFFFFF] max-w-[531px]">
                Get notified when we add new items to our specials menu, update
                our price list of have promos!
              </p>
            </div>
            <div className="flex justify-center items-center w-full gap-2">
              <input
                type="text"
                placeholder="gregphillips@gmail.com"
                className="placeholder:text-[#B3B3B3] bg-[#F7F7F7] text-[#00302E] font-[600] py-[15px] max-w-[299px] w-full outline-none rounded-[5px] pl-[15px]"
              />
              <button className="text-[18px] text-[#00302E] font-[500] py-[15px] px-[40px] outline-none border-none bg-[#FBDDBB] rounded-[5px]">
                Get notified
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex-col flex bg-[#0B0D17] h-full">
          <div className="flex max-w-[1500px] mx-auto w-full items-start pt-[64px] pb-[64px] justify-around">
            <div className="flex flex-col justify-center">
              <p className="font-[500] text-[18px] text-[#F4F5F7] mb-[24px]">
                Company
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                About Us
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Careers
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-[500] text-[18px] text-[#F4F5F7] mb-[24px]">
                Support
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Help Center
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Safety Center
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-[500] text-[18px] text-[#F4F5F7] mb-[24px]">
                Legal
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Cookies Policy
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Privacy Policy
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Terms of Service
              </p>
              <p className="mb-[12px] font-[400] text-[14px] text-[#EEEFF4]">
                Dispute Resolution
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-[500] text-[18px] text-[#F4F5F7] mb-[24px]">
                Install App
              </p>
              <img src="/Badges (3).svg" alt="" />
            </div>
          </div>
          <hr className="border-[#FFFFFF] max-w-[1500px] w-full mx-auto mb-[10px]" />
          <div className="w-full mx-auto flex justify-between max-w-[1250px] mb-[10px] items-center">
            <p className="flex justify-center items-center text-[14px] text-[#EEEFF4]">
              © 2021 LILIES, All rights reserved
            </p>
            <div className=" flex justify-center items-center">
              <img src="/Social Icons.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
