import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/login";
import { Foods } from "./Pages/Foods/foods";
import { Register } from "./Pages/register/register";
import { MainRouter } from "./Pages/mainRouter";
import { Layouts } from "./Layout/Layouts";
import { Order } from "./Pages/Order/order";
import { Dashboard } from "./Pages/Dashboard/dashboard";
import { Cart } from "./Pages/Home/Cart/cart";
import { Profile } from "./Pages/Profile/profile";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Foods />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<MainRouter />}>
        <Route element={<Layouts />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
