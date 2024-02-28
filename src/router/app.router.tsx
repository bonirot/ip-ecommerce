import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { SignIn } from "../pages/login";
import { Cart } from "../pages/cart";
import { ProductPage } from "../pages/product";
import ProtectedRoute from "../components/ProtectedRoutes";

type Props = {};

const AppRoutes = ({}: Props) => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<ProtectedRoute component={Home} />} />
      <Route
        path="/:productId"
        element={<ProtectedRoute component={ProductPage} />}
      />
      <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
