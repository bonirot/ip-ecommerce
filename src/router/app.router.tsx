import { Routes, BrowserRouter, Navigate, Route } from "react-router-dom";
import { Home, ProductCards } from "../pages/home";
import { SignIn } from "../pages/login";
import { Cart } from "../pages/cart";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/producpage" element={<ProductCards />} />{" "}
          {/* esto hay que mirarlo */}
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
