import { useContext } from "react";
import { Home } from "../Pages/Home/home";
import { Sidebar } from "./Sidebar/Sidebar";
import { MainProvider } from "../Context/GlobaState";
export const Layouts = () => {
  const { sideBarMode } = useContext(MainProvider);
  return (
    <>
      <div className="flex w-full overflow-x-hidden h-screen max-h-full">
        <div
          style={{ display: sideBarMode ? "block" : "none" }}
          className="transition-all duration-500 ease-in-out w-full max-w-[320px] bg-[#FBFBFB]"
        >
          <Sidebar />
        </div>
        <div className="w-full bg-white">
          <Home />
        </div>
      </div>
    </>
  );
};
