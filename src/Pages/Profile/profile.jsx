import { useState } from "react";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
export const Profile = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate('')
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const handleShow = () => {
    if (show === false) {
      setShow(true);
    }
    if (show === true) {
      setShow(false);
    }
  };
  return (
    <>
      <div className="w-full h-full relative flex flex-col">
        <div className="w-full max-w-[1150px] mx-auto flex mt-[15px] justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <img className="w-[50px] h-[50px]" src="/40w 1 (1).svg" alt="" />
            <p className="text-[#00302E] font-[600] text-[19px]">
              Good morning, Oghenevwede!
            </p>
          </div>
          <i
            onClick={handleShow}
            className="cursor-pointer fa-solid fa-bars text-black font-[700] text-[20px]"
          ></i>
        </div>
        <div
          className={classNames(
            "transition-all duration-[1000ms] mt-[-150px] ease-in-out w-full gap-1 flex flex-col py-[5px] max-w-[180px] bg-[#E2B887] absolute top-14 right-0 rounded-bl-lg text-center font-[600]",
            {
              "mt-[0px]": show === true,
            }
          )}
        >
          <div className="flex cursor-pointer items-center gap-1 mx-auto max-w-fit justify-center">
            <p className="mt-[-3px] text-[#00302E]">Setting</p>
            <i className="fa-solid fa-gear text-black"></i>
          </div>
          <div onClick={handleLogOut} className="flex max-w-fit mx-auto cursor-pointer justify-center font-[600] items-center gap-1">
            <p className="mt-[-3px] text-[#00302E]">Logout</p>
            <i className="fa-solid fa-right-from-bracket text-black"></i>
          </div>
        </div>
      </div>
    </>
  );
};
