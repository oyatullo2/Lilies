import { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
import api from "../../Server/api";
export const Profile = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate("");

  useEffect(() => {
    const handleProfileGet = async () => {
      try {
        const res = await api.get("/auth/profile");
        setIsLoading(true);
        const data = await res.data.user;
        setName(data.name);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    handleProfileGet();
  }, []);

  const handleLogOut = () => {
    setLogout(true);
  };

  const handleLogOutYes = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const hanleLogOutNo = () => {
    setLogout(false);
  };

  const handleShow = () => {
    if (show === false) {
      setShow(true);
    }
    if (show === true) {
      setShow(false);
    }
  };

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

  if (name.length === 0 && !isLoading) {
    return (
      <div className="w-full h-screen max-h-full flex justify-center items-center">
        <p className="text-[#00302E] font-[600] text-[19px]">
          You are not logged in !
        </p>
      </div>
    );
  }

  return (
    <>
      {name && (
        <div className="w-full px-[10px] h-full relative flex flex-col">
          <div className="w-full max-w-[1150px] mx-auto flex mt-[15px] justify-between items-center">
            <div className="flex items-center justify-center gap-2">
              <img className="w-[50px] h-[50px]" src="/40w 1 (1).svg" alt="" />
              <p className="text-[#00302E] font-[600] text-[19px]">
                Good morning, {name}!
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
            <Link to={"/setting"}>
              <div className="flex cursor-pointer items-center gap-1 mx-auto max-w-fit justify-center">
                <p className="mt-[-3px] text-[#00302E]">Setting</p>
                <i className="fa-solid fa-gear text-black"></i>
              </div>
            </Link>
            <div
              onClick={handleLogOut}
              className="flex max-w-fit mx-auto cursor-pointer justify-center font-[600] items-center gap-1"
            >
              <p className="mt-[-3px] text-[#00302E]">Logout</p>
              <i className="fa-solid fa-right-from-bracket text-black"></i>
            </div>
          </div>
        </div>
      )}
      <div
        className={classNames(
          "w-full h-screen bg-black/30 z-[-5px] absolute top-0 left-0",
          {
            hidden: logout === false,
            flex: logout === true,
          }
        )}
      >
        <div className="w-full h-screen max-h-full gap-5 flex flex-col justify-center items-center">
          <p className="text-[#00302E] font-[600] text-[19px]">
            Are you sure ?
          </p>
          <div className="flex items-center w-full justify-center gap-5">
            <button
              onClick={handleLogOutYes}
              className="bg-white text-red-600 py-[3px] w-full max-w-[110px] rounded-md font-[600] border-[2px] border-red-600"
            >
              Yes
            </button>
            <button
              onClick={hanleLogOutNo}
              className="bg-white text-green-500 py-[3px] w-full max-w-[110px] rounded-md font-[600] border-[2px] border-green-500"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
