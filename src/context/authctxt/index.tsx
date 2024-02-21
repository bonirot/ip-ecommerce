import React, { createContext, useCallback, useMemo, useReducer, useState } from "react";

const myAuthApp = "myAuthApp";

interface Authentication {
  isAutheticated: boolean;
}
type Action = { type: "LOGIN" } | { type: "LOGOUT" };
type Dispatch = (action: Action) => void;

const AuthContext = createContext<Authentication | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

const authReducer = (state: Authentication, action: Action): Authentication => {
  switch(action.type){
    case 'LOGIN':
      return {isAutheticated: true}
  }
}

const AuthContextProvider = ({ children }:{children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(REDUCE {isAuthenticated: false});

return(
  <AuthContext.Provider value={state}>
    <AuthDispatchContext.Provider value={dispatch}>
      {children}
    </AuthDispatchContext.Provider>
  </AuthContext.Provider>
)
}
