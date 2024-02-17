import { useEffect, useState } from "react";
import "./signin.css";
import { User } from "../../interfaces/user";

export function LogoApp() {
  return (
    <div>
      <img className="logo" src="./src/assets/logog.png" alt="Logo Gappllery" />
    </div>
  );
}

async function getUserData() {
  try {
    //VAMOS A LLAMAR A LA API DEL ORTO
    const data = await fetch("src/data/users.json");
    const JSONdata = await data.json();
    return JSONdata;
  } catch (error) {
    console.log(error);
  }
}

export function SignIn() {
  //el useEffect es un mijita y no le gustan los async, así que hay que meter OTRA función para poder poner el async

  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    async function dataUsers() {
      const allUsersData = await getUserData();
      setUsers(allUsersData);
    }
    dataUsers();
  }, []);
  function validateForm(ev: React.ChangeEvent<HTMLFormElement>) {
    ev.preventDefault();
    const userData = ev.target; //se usa para pillar el formulario (el evento)
    const inputMail = userData.inputMail.value;
    const inputPass = userData.inputPass.value;

    //vamos a traer los daticos
    const userFound = users.find(
      (element) => inputMail === element.mail && inputPass === element.password
    );

    if (userFound) {
      alert("JELEEEEE");
    } else {
      alert("péinate");
    }
  }

  return (
    <section className="mainpage">
      <LogoApp />
      <div className="containerSignIn">
        <h3 className="signInTitle">Sign in</h3>
        <form className="form" onSubmit={validateForm}>
          <div className="inputdiv">
            <img className="logIco" src="./src/assets/user-filled.webp" />
            <input
              id="email"
              type="email"
              name="inputMail"
              className="inputSignIn"
              autoComplete="off"
              placeholder="email"
              required
            />
          </div>
          <div className="inputdiv">
            <img className="logIco" src="./src/assets/key.webp" />
            <input
              id="pass"
              type="password"
              name="inputPass"
              className="inputSignIn"
              placeholder="password"
              required
            />
          </div>
          <button className="signInBtn">Sign in!</button>
        </form>
      </div>
    </section>
  );
}
