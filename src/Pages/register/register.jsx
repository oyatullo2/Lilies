import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate();

  const handleShow = () => {
    if (show === false) {
      setType("text");
      setShow(true);
    } else {
      setShow(false);
      setType("password");
    }
  };

  const handleRegister = () => {
    if (
      name.length >= 3 &&
      email.length >= 11 &&
      email.endsWith("@gmail.com") &&
      password.length >= 6
    ) {
      setName("");
      setEmail("");
      setPassword("");
      localStorage.setItem("token", "true");
      navigate("/home");
    } else {
      setError(true);
      if (
        name.length < 3 &&
        email.length >= 11 &&
        email.endsWith("@gmail.com") &&
        password.length >= 6
      ) {
        setErrorMassage("Name is not valid ❗");
      }
      if (name.length >= 3 && email.length < 11 && password.length >= 6) {
        setErrorMassage("Email is not valid ❗");
      }
      if (
        name.length >= 3 &&
        email.length >= 11 &&
        !email.endsWith("@gmail.com") &&
        password.length >= 6
      ) {
        setErrorMassage("Email is not valid ❗");
      }
      if (
        name.length >= 3 &&
        email.length >= 11 &&
        email.endsWith("@gmail.com") &&
        password.length < 6
      ) {
        setErrorMassage("Password is not valid ❗");
      }
      if (name.length < 3 && email.length < 11 && password.length < 6) {
        setErrorMassage("All fields are not valid ❗");
      }
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };
  return (
    <>
      <div className="flex w-full h-screen max-h-full bg-white">
        <img src="/Group 14.svg" alt="Rasm bor" />
        <div className="flex justify-center items-center flex-col w-full">
          <p className="text-[#00302E] font-[700] mb-[61px] text-[27px] ">
            Welcome to Lilies!
          </p>
          <div className="flex mb-[28px] w-full mx-auto justify-center items-center flex-col gap-[28px]">
            <input
              className="border-[2px] outline-none border-[#FBDDBB82] bg-transparent text-[#00302E] font-[600] text-[14px] py-[19px] px-[25px] w-full max-w-[488px] placeholder:text-[#00302E87] placeholder:font-[400] rounded-[5px]"
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleEnter}
              value={name}
              type="text"
              placeholder="Your First Name"
            />
            <input
              className="border-[2px] outline-none border-[#FBDDBB82] bg-transparent text-[#00302E] font-[600] text-[14px] py-[19px] px-[25px] w-full max-w-[488px] placeholder:text-[#00302E87] placeholder:font-[400] rounded-[5px]"
              type="email"
              onKeyDown={handleEnter}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your Email address"
            />
            <div className="flex mb-[22px] max-w-[488px] items-center justify-center mx-auto w-full relative">
              <input
                className="border-[2px] outline-none border-[#FBDDBB82] bg-transparent text-[#00302E] font-[600] text-[14px] py-[19px] pr-[40px] pl-[25px] w-full max-w-[488px] placeholder:text-[#00302E87] placeholder:font-[400] rounded-[5px]"
                type={type}
                onKeyDown={handleEnter}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Your Password"
              />
              <p
                onClick={handleShow}
                className="absolute font-[600] text-[14px] right-[5px] text-[#00302E] cursor-pointer"
              >
                {show !== false && password.length !== 0 ? "hide" : "show"}
              </p>
            </div>
            <button
              onClick={handleRegister}
              className="bg-[#00302E] text-[#FBDDBB] text-[18px] font-[500] py-[19px] w-full max-w-[488px] rounded-[5px] mx-auto border-none outline-none"
            >
              Sign UP
            </button>
          </div>
          <p className="text-[#00302E] text-[14px] font-[400]">
            Already have an account.
            <Link to={"/login"}>
              <span className="text-[#00302E] font-[700] text-[14px]">
                LOGIN
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div
        style={{ display: error ? "flex" : "none" }}
        className="w-full h-screen max-h-full bg-black/50 z-[-5px] absolute top-0"
      >
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex relative py-[20px] rounded-[5px] w-full max-w-[400px] items-center justify-center bg-white">
            <p
              onClick={() => setError(false)}
              className="absolute right-[8px] cursor-pointer text-red-600 top-0 font-[700]"
            >
              x
            </p>
            <p className="text-[#00302E] font-[600]">{errorMassage}</p>
          </div>
        </div>
      </div>
    </>
  );
};
