import { useState } from "react";
import api from "../../Server/api";
import classNames from "classnames";
import { ThreeDot } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Setting = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
  });
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resMessage, setResMessage] = useState("");
  const [deleteAccStatus, setDeleteAccStatus] = useState(false);
  const navigate = useNavigate("");

  const handleValue = (e) => {
    const { name, value: inputValue } = e.target;
    setValue({ ...value, [name]: inputValue });
  };

  const handlePutUserData = async () => {
    try {
      const res = await api.put("/auth/profile", value);
      if (res.data.success === true) {
        setIsLoading(false);
        setValue("");
        setResMessage(
          `Name: ${res.data.user.name}, Email: ${res.data.user.email}`
        );
        const timeOut = setTimeout(() => {
          setResMessage("");
        }, 3000);
        return () => clearTimeout(timeOut);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErr("all");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const res = await api.delete("/auth/profile");
      if (res.status === 200) {
        navigate("/login");
      }
      localStorage.removeItem("token");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerify = () => {
    if (value.name !== "" && value.email !== "" && value.email.includes("@")) {
      setIsLoading(true);
      handlePutUserData();
    } else {
      setErr("all");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  if (isLoading) {
    return (
      <div className="w-full absolute flex-col gap-5 h-screen flex items-center justify-center max-h-full">
        <ThreeDot
          variant="bounce"
          color="#32cd32"
          size="medium"
          text=""
          textColor=""
        />
        <p className="text-[#32cd32] font-[600] text-[18px]">
          Updating Profile ...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full animate-[OpacityAnimation_2.5s_ease-out] absolute h-screen max-h-full">
        <Link to={"/profile"}>
          <p className="absolute top-1 right-2 text-[#00302E] font-[600] text-[18px]">
            close <span className="text-red-600">x</span>
          </p>
        </Link>
        <div className="w-full flex-col h-screen max-h-full flex items-center justify-center">
          <p className="text-[#00302E] font-[700] text-[28px] mb-[20px]">
            Edit Profile !
          </p>
          <div className="w-full gap-3 justify-center items-center flex flex-col">
            <input
              value={value.name}
              name="name"
              onKeyDown={handleEnter}
              onChange={handleValue}
              type="text"
              placeholder="Name"
              className={classNames(
                "text-[#00302E] font-[600] transition-all duration-500 ease-in-out text-[17px] bg-transparent border-[2px] border-[#00302E] py-[7px] w-full max-w-[350px] px-[15px] rounded-[5px] outline-none",
                {
                  "border-red-600": err === "all",
                }
              )}
            />
            <input
              type="email"
              value={value.email}
              name="email"
              onKeyDown={handleEnter}
              onChange={handleValue}
              placeholder="Email"
              className={classNames(
                "text-[#00302E] font-[600] transition-all duration-500 ease-in-out text-[17px] bg-transparent border-[2px] border-[#00302E] py-[7px] w-full max-w-[350px] px-[15px] rounded-[5px] outline-none",
                {
                  "border-red-600": err === "all",
                }
              )}
            />
            <input
              type="file"
              className="text-[#00302E] font-[600] text-[17px] bg-transparent border-[2px] border-[#00302E] py-[7px] w-full max-w-[350px] px-[15px] rounded-[5px] outline-none"
            />
            <button
              onClick={handleVerify}
              className="text-[#00302E] font-[600] hover:shadow-md transition-all duration-500 ease-in-out text-[17px] bg-[#E2B887] border-none py-[10px] w-full px-[38px] rounded-[7px] outline-none max-w-[350px]"
            >
              Update
            </button>
            {resMessage && (
              <div className="flex transition-all duration-500 ease-in-out flex-col justify-center items-center gap-1">
                <p className="text-[#32cd32] font-[600] text-[18px]">
                  Updating Profile!
                </p>
                <p className="text-[#32cd32] font-[600] text-[18px]">
                  {resMessage}
                </p>
              </div>
            )}
            <button onClick={() => setDeleteAccStatus(true)} className="text-red-600 font-[600] hover:shadow-md transition-all duration-500 ease-in-out text-[17px] bg-transparent border-[2px] border-red-600 py-[5px] w-full rounded-[5px] outline-none absolute bottom-1 right-1 max-w-[150px]">
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <div
        className={classNames("w-full h-screen bg-black/90 absolute top-0 ", {
          hidden: deleteAccStatus === false,
          flex: deleteAccStatus,
        })}
      >
        <div className="w-full flex-col gap-3 h-screen justify-center items-center flex">
          <p className="text-white font-[600] text-[18px]">Are you sure ?</p>
          <div className="flex items-center w-full justify-center gap-5">
            <button onClick={() => {handleDeleteAccount(); setIsLoading(true); setDeleteAccStatus(false)}} className="text-red-600 font-[600] border-red-600 border-[2px] w-full max-w-[100px] rounded-md py-[2px]">
              Yes
            </button>
            <button
              onClick={() => setDeleteAccStatus(false)}
              className="text-green-400 font-[600] border-green-400 border-[2px] w-full max-w-[100px] rounded-md py-[2px]"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
