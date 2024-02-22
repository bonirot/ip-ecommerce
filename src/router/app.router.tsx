import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { SignIn } from "../pages/login";
import { Cart } from "../pages/cart";
import { ProductPage } from "../pages/product";
import { PaintingsContextProvider } from "../context/paitingsctxt";
import { UsersContextProvider } from "../context/userctxt";
import ProtectedRoute from "../components/ProtectedRoutes";
import { AuthProvider } from "../context/authctxt";

type Props = {};

const AppRoutes = ({}: Props) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<UsersContextProvider />}>
            <Route path="/" element={<SignIn />} />
            <Route element={<PaintingsContextProvider />}>
              <Route
                path="/home"
                element={<ProtectedRoute component={Home} />}
              />
              <Route
                path="/:productId"
                element={<ProtectedRoute component={ProductPage} />}
              />
              <Route
                path="/cart"
                element={<ProtectedRoute component={Cart} />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
