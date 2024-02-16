import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, ProductCards } from "../pages/home";
import { SignIn } from "../pages/login";
import { Cart } from "../pages/cart";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productpage" element={<ProductCards />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
