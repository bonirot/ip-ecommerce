import "./signin.css";

export function LogoApp() {
  return (
    <div>
      <img
        className="logo"
        src="./src/assets/logowhite.webp"
        alt="Logo Gappllery"
      />
    </div>
  );
}

export function SignIn() {
  return (
    <div className="containerSignIn">
      <h3 className="signInTitle">Sign in</h3>
      <div className="inputdiv">
        <img className="logIco" src="./src/assets/user-filled.webp" />
        <input className="inputSignIn" placeholder="email" />
      </div>
      <div className="inputdiv">
        <img className="logIco" src="./src/assets/key.webp" />
        <input className="inputSignIn" placeholder="password" />
      </div>
      <button className="signInBtn">Sign in!</button>
    </div>
  );
}
