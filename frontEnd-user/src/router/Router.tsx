import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Home from "../components/Home";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Register from "../components/Register";
import ManProducts from "../components/ManProducts";
import Detail from "../components/Detail/Detail";
import Favorites from "../components/Favorites/Favorites";
import Cart from "../components/Cart/Cart";
import Payment from "../components/Payment/Payment";
import History from "../components/History/History";
import Profiles from "../components/Profiles/Profiles";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} index />
      <Route path="/home" element={<DefaultLayout children={<Home />} />} />
      <Route path="/login" element={<LoginLayout children={<Register />} />} />
      <Route
        path="/product"
        element={<DefaultLayout children={<ManProducts />} />}
      />
      <Route path="/detail" element={<DefaultLayout children={<Detail />} />} />
      <Route
        path="/favorites"
        element={<DefaultLayout children={<Favorites />} />}
      />
      <Route path="/cart" element={<DefaultLayout children={<Cart />} />} />
      <Route
        path="/payment"
        element={<DefaultLayout children={<Payment />} />}
      />
      <Route
        path="/profiles"
        element={<DefaultLayout children={<Profiles />} />}
      />
      <Route
        path="/history"
        element={<DefaultLayout children={<History />} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
