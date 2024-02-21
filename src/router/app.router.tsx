import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { SignIn } from "../pages/login";
import { Cart } from "../pages/cart";
import { ProductPage } from "../pages/product";
import { PaintingsContextProvider } from "../context/paitingsctxt";
import { UsersContextProvider } from "../context/userctxt";

type Props = {};

const AppRoutes = ({}: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UsersContextProvider />}>
          <Route path="/" element={<SignIn />} />
          <Route element={<PaintingsContextProvider />}>
            <Route path="/home" element={<Home />} />
            <Route path="/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
