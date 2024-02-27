import "./App.css";
import { AuthProvider } from "./context/authctxt";
import { CartContextProvider, UsersContextProvider } from "./context/userctxt";
import AppRoutes from "./router/app.router";

function App() {
  return (
    <>
      <AuthProvider>
        <UsersContextProvider>
          <CartContextProvider>
            <AppRoutes />
          </CartContextProvider>
        </UsersContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
