import { useContext } from "react";
import { Home } from "../Pages/Home/home";
import { Sidebar } from "./Sidebar/Sidebar";
import { MainProvider } from "../Context/GlobaState";
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
export const Layouts = () => {
  const { sideBarMode } = useContext(MainProvider);
  const local = useLocation();
  return (
    <>
      <div className="flex w-full overflow-x-hidden h-screen max-h-full">
        <div
          style={{ display: sideBarMode ? "block" : "none" }}
          className="transition-all duration-500 ease-in-out w-full max-w-[320px] bg-[#FBFBFB]"
        >
          <Sidebar />
        </div>
        <div className="w-full flex flex-col bg-white">
          <div
            className={classNames("w-full", {
              hidden:
                local.pathname === "/profile" ||
                local.pathname.startsWith("/foodBox"),
            })}
          >
            <Home />
          </div>
          <div className="w-full h-full max-h-[300px] overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
