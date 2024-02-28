import { useEffect, useState } from "react";
import "./signin.css";
import { useAuthDispatch } from "../../context/authctxt";
import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces/user";
import { useUsersContext } from "../../context/userctxt";

export function LogoApp() {
  return (
    <div>
      <img className="logo" src="./src/assets/logog.png" alt="Logo Gappllery" />
    </div>
  );
}

async function getUserData() {
  try {
    const data = await fetch("src/data/users.json");
    const JSONdata = await data.json();
    return JSONdata;
  } catch (error) {
    console.log(error);
  }
}

export function SignIn() {
  const userctxt = useUsersContext();
  const [users, setUsers] = useState([] as User[]);
  const [userData, setUserData] = useState({ usermail: "", password: "" });
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function dataUsers() {
      const allUsersData = await getUserData();
      setUsers(allUsersData);
    }
    dataUsers();
  }, []);

  function handleLogin() {
    dispatch({ type: "LOGIN" });
    navigate("/home");
  }

  function validateForm(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const { usermail, password } = userData;

    const userFound = users.find(
      (element) => usermail === element.mail && password === element.password
    );

    if (userFound) {
      handleLogin();
      userctxt.setUser(userFound);
    } else {
      alert("Incorrect email or password");
    }
  }

  return (
    <section className="mainpage">
      <LogoApp />
      <div className="containerSignIn">
        <h3 className="signInTitle">Sign in</h3>
        <form className="form" onSubmit={validateForm}>
          <div className="inputdiv">
            <img
              className="logIco"
              src="./src/assets/user-filled.webp"
              alt="User icon"
            />
            <input
              id="email"
              type="email"
              name="inputMail"
              className="inputSignIn"
              autoComplete="off"
              value={userData.usermail}
              onChange={(e) =>
                setUserData({ ...userData, usermail: e.target.value })
              }
              placeholder="email"
              required
            />
          </div>
          <div className="inputdiv">
            <img
              className="logIco"
              src="./src/assets/key.webp"
              alt="Key icon"
            />
            <input
              id="pass"
              type="password"
              name="inputPass"
              className="inputSignIn"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder="password"
              required
            />
          </div>
          <button className="signInBtn" type="submit">
            Sign in!
          </button>
        </form>
      </div>
    </section>
  );
}
