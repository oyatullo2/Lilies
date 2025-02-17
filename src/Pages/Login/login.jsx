import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
import classNames from "classnames";
import api from "../../Server/api";
export const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [type, setType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [inputBorderErr, setInputBorderErr] = useState(false);
  const navigate = useNavigate("");

  const handleRequest = async () => {
    try {
      const res = await api.post("/auth/sign-in", value);

      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    } catch (err) {
      setIsLoading(false);
      setInputBorderErr(true);
      console.log(err);
    }
  };
  const handleValue = (e) => {
    const { name, value: inputValue } = e.target;
    setValue({ ...value, [name]: inputValue });
  };
  const handleShow = () => {
    if (type === "password") {
      setType("text");
      setShow(true);
    }
    if (type === "text") {
      setType("password");
      setShow(false);
    }
  };

  const handleLogin = () => {
    if (
      value.email.length >= 11 &&
      value.email.includes("@") &&
      value.password.length !== ""
    ) {
      handleRequest();
      setValue("");
      setValue("");
      setIsLoading(true);
      localStorage.setItem("token", "true");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  if (isLoading === true) {
    return (
      <div className="w-full flex-col gap-5 h-screen max-h-full flex justify-center items-center bg-white">
        <ThreeDot
          variant="bounce"
          color="#32cd32"
          size="medium"
          text=""
          textColor=""
        />
        <p className="text-[#32cd32] text-[20px] text-center font-[600]">Verification in progress ...</p>
      </div>
    );
  }
  return (
    <>
      <div className="w-full flex h-screen max-h-full bg-white">
        <img src="/Group 13.svg" alt="Rasm bor" />
        <div className="w-full h-full justify-center items-center flex flex-col">
          <p className="text-[#00302E] font-[700] mb-[31px] text-[27px]">
            Welcome Back!
          </p>
          <div className="flex w-full flex-col mb-[34px] gap-[38px]">
            <input
              type="text"
              onKeyDown={handleEnter}
              onChange={handleValue}
              name="email"
              value={value.email}
              placeholder="Your Email address"
              className={classNames(
                "bg-transparent outline-none font-[600] text-[#00302E] border-[2px] rounded-[5px] py-[19px] w-full max-w-[488px] mx-auto px-[25px] placeholder:text-[#00302E87] placeholder:text-[14px] placeholder:font-[400] ",
                {
                  "border-[#FBDDBB82]": inputBorderErr === false,
                  "border-red-600": inputBorderErr === true,
                }
              )}
            />
            <div className="flex max-w-[488px] mx-auto relative w-full justify-between items-center">
              <input
                type={type}
                onKeyDown={handleEnter}
                placeholder="Your Password"
                onChange={handleValue}
                value={value.password}
                name="password"
                className={classNames(
                  "bg-transparent outline-none font-[600] text-[#00302E] border-[2px] rounded-[5px] py-[19px] w-full max-w-[488px] mx-auto px-[25px] placeholder:text-[#00302E87] placeholder:text-[14px] placeholder:font-[400] ",
                  {
                    "border-[#FBDDBB82]": inputBorderErr === false,
                    "border-red-600": inputBorderErr === true,
                  }
                )}
              />
              <p
                onClick={handleShow}
                className="text-[#00302E] font-[600] cursor-pointer text-[14px] right-[10px] absolute"
              >
                {show !== false && value.password.length !== 0
                  ? "hide"
                  : "show"}
              </p>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#00302E] text-[#FBDDBB] font-[500] text-[18px] py-[19px] w-full max-w-[488px] mx-auto border-none rounded-[5px]"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <div className="flex w-full max-w-[488px] justify-between items-center mx-auto">
            <Link to={"/register"}>
              <p className="text-[#00302EE8] font-[500] text-[14px]">
                Create an account
              </p>
            </Link>
            <p className="text-[#00302EE8] font-[500] text-[14px]">
              Forgot Password
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
