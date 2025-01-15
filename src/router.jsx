import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/login";
import { Foods } from "./Pages/Foods/foods";
import { Register } from "./Pages/register/register";
import { MainRouter } from "./Pages/mainRouter";
import { Home } from "./Pages/Home/home";
import { Layouts } from "./Layout/Layouts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Foods />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<MainRouter />}>
        <Route element={<Layouts />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};
