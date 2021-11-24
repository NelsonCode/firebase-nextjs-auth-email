import { createContext, useState } from "react";

const Context = createContext({});

// CONTEXT TO KNOW IF THE USER IS LOGGED IN

export function ContextAuthProvider({ children }) {
  const [isLogged, setisLogged] = useState(false);
  return (
    <Context.Provider value={{ isLogged, setisLogged }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
