import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("password");
  const [error, setError] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate("");
  const handleShow = () => {
    if (show === false) {
      setType("text");
      setShow(true);
    } else {
      setType("password");
      setShow(false);
    }
  };

  const handleLogin = () => {
    if (
      email.length >= 11 &&
      email.endsWith("@gmail.com") &&
      password.length >= 6
    ) {
      setEmail("");
      setPassword("");
      navigate("/home");
      localStorage.setItem("token", "true");
    } else {
      setError(true);
      if (
        email.length < 11 &&
        email.endsWith("@gmail.com") &&
        password.length >= 6
      ) {
        setErrorMassage("Email is not valid ❗");
      }
      if (
        email.length >= 11 &&
        !email.endsWith("@gmail.com") &&
        password.length >= 6
      ) {
        setErrorMassage("Email is not valid ❗");
      }
      if (
        email.length >= 11 &&
        email.endsWith("@gmail.com") &&
        password.length < 6
      ) {
        setErrorMassage("Password is not valid ❗");
      }
      if (email.length < 11 && password.length < 6) {
        setErrorMassage("Inputs is not valid ❗");
      }
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your Email address"
              className="bg-transparent outline-none font-[600] text-[#00302E] border-[#FBDDBB82] border-[2px] rounded-[5px] py-[19px] w-full max-w-[488px] mx-auto px-[25px] placeholder:text-[#00302E87] placeholder:text-[14px] placeholder:font-[400] "
            />
            <div className="flex max-w-[488px] mx-auto relative w-full justify-between items-center">
              <input
                type={type}
                onKeyDown={handleEnter}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="bg-transparent outline-none border-[#FBDDBB82] border-[2px] rounded-[5px] py-[19px] w-full max-w-[488px] mx-auto pl-[25px] pr-[45px] placeholder:text-[#00302E87] placeholder:text-[14px] placeholder:font-[400] text-[#00302E] font-[600]"
              />
              <p
                onClick={handleShow}
                className="text-[#00302E] font-[600] cursor-pointer text-[14px] right-[10px] absolute"
              >
                {show !== false && password.length !== 0 ? "hide" : "show"}
              </p>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#00302E] text-[#FBDDBB] font-[500] text-[18px] py-[19px] w-full max-w-[488px] mx-auto border-none rounded-[5px]"
            >
              Login
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
      <div
        style={{ display: error ? "block" : "none" }}
        className="w-full h-screen max-h-full bg-black/50 z-[-5px] absolute top-0"
      >
        <div className="w-full h-screen flex justify-center items-center">
          <div className="bg-white relative w-full flex justify-center items-center rounded-[5px] max-w-[400px] mx-auto py-[20px]">
            <p className="text-[#00302E] font-[500] text-[18px]">
              {errorMassage}
            </p>
            <p
              className="absolute right-[10px] font-[700] text-[17px] text-red-600 top-[1px] cursor-pointer"
              onClick={() => setError(false)}
            >
              x
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
