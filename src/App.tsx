import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/authctxt";
import AppRoutes from "./router/app.router";
import { UsersContextProvider } from "./context/userctxt";
import { PaintingsContextProvider } from "./context/paitingsctxt";

function App() {
  return (
    <>
      <UsersContextProvider>
        <PaintingsContextProvider>
          <AuthProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AuthProvider>
        </PaintingsContextProvider>
      </UsersContextProvider>
    </>
  );
}

export default App;
