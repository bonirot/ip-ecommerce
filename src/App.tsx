import "./App.css";
import { UserProvider } from "./context/userctxt/user";
import AppRoutes from "./router/app.router";
function App() {
  return (
    <>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  );
}

export default App;
