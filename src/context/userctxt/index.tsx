import { createContext } from "react";

export const userNameCtxt = createContext(null);

export const UserProvider = ({ children }) => {
  const dataUser = {
    name: "Lujulia",
    mail: "jusanchis@example.com",
  };
  return (
    <userNameCtxt.Provider value={dataUser.name}>
      {children}
    </userNameCtxt.Provider>
  );
};

// import React, { createContext, useContext, useState } from "react";

// // interface JSONDataContextProps {
// //   data: any;
// //   setData: React.Dispatch<React.SetStateAction<any>>;
// // }
// interface User {
//   name: string;
//   username: string;
//   mail: string;
//   password: string;
//   cart: [];
//   wishlist: [];
// }

// const USERDataContext = createContext<User | undefined>(undefined);

// export const useUSERDataContext = () => {
//   const context = useContext(USERDataContext);
//   if (!context) {
//     throw new Error(
//       "useJSONDataContext debe usarse dentro de un proveedor JSONDataContext"
//     );
//   }
//   return context;
// };

// export const JSONDataProvider: React.FC = ({ children }) => {
//   const [data, setData] = useState<any>(null);

//   return (
//     <USERDataContext.Provider value={{ data, setData }}>
//       {children}
//     </USERDataContext.Provider>
//   );
// };
