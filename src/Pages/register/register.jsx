import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import api from "../../Server/api";
export const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [type, setType] = useState("password");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleRequest = async () => {
    try {
      const res = await api.post("./sign-up", value);
      if (res.status === 201) navigate("/login");
    } catch (err) {
    }
  };

  const inputError = () => {
    if (value.name === "" && value.email === "" && value.password === "") {
      setError("all");
    }
    if (value.name === "" && value.email !== "" && value.password !== "") {
      setError("name");
    }
    if (
      value.name !== "" &&
      (value.email === "" || !value.email.includes("@")) &&
      value.password !== ""
    ) {
      setError("email");
    }
    if (value.name !== "" && value.email !== "" && value.password === "") {
      setError("password");
    }
    if (
      value.name !== "" &&
      value.email !== "" &&
      value.password !== "" &&
      value.email.includes("@")
    ) {
      setError("");
      handleRequest();
    }
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

  const handleValue = (e) => {
    const { name, value: inputValue } = e.target;
    setValue({ ...value, [name]: inputValue });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      inputError();
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
              className={classNames(
                "border-[2px] transition-all ease-in-out duration-500 outline-none bg-transparent text-[#00302E] font-[600] text-[14px] py-[19px] px-[25px] w-full max-w-[488px] placeholder:text-[#00302E87] placeholder:font-[400] rounded-[5px]",
                {
                  "border-[#FBDDBB82]": error !== "name" || error !== "all",
                  "border-red-600": error === "name" || error === "all",
                }
              )}
              onChange={handleValue}
              onKeyDown={handleEnter}
              value={value.name}
              name="name"
              type="text"
              placeholder="Your First Name"
            />
            <input
              className={classNames(
                "border-[2px] outline-none border-[#FBDDBB82] bg-transparent text-[#00302E] font-[600] text-[14px] py-[19px] px-[25px] w-full max-w-[488px] placeholder:text-[#00302E87] placeholder:font-[400] rounded-[5px] transition-all duration-500 ease-in-out",
                {
                  "border-[#FBDDBB82]": error !== "email" || error !== "all",
                  "border-red-600": error === "email" || error === "all",
                }
              )}
              type="email"
              onKeyDown={handleEnter}
              onChange={handleValue}
              value={value.email}
              name="email"
              placeholder="Your Email address"
            />
            <div className="flex mb-[22px] max-w-[488px] items-center justify-center mx-auto w-full relative">
              <input
                className={classNames(
                  "border-[2px] outline-none border-[#FBDDBB82] bg-transparent text-[#00302E] font-[600] text-[14px] py-[19px] px-[25px] w-full max-w-[488px] placeholder:text-[#00302E87] placeholder:font-[400] rounded-[5px] transition-all duration-500 ease-in-out",
                  {
                    "border-[#FBDDBB82]":
                      error !== "password" || error !== "all",
                    "border-red-600": error === "password" || error === "all",
                  }
                )}
                type={type}
                onKeyDown={handleEnter}
                onChange={handleValue}
                value={value.password}
                name="password"
                placeholder="Your Password"
              />
              <p
                onClick={handleShow}
                className="absolute font-[600] text-[14px] right-[5px] text-[#00302E] cursor-pointer"
              >
                {show ? "hide" : "show"}
              </p>
            </div>
            <button
              onClick={inputError}
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
    </>
  );
};
