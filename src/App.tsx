import "./App.css";
import Header from "./components/header";
import { Home } from "./pages/home";
import { SignIn, LogoApp } from "./pages/login";

function App() {
  return (
    <>
      {/* <Header /> */}
      <LogoApp />
      <SignIn />
      {/* <Home /> */}
    </>
  );
}

export default App;
