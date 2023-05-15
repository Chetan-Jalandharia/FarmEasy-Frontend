import { createContext, useState } from "react";

export const RefreshContext = createContext();

export default function UpdateProvider({ children }) {
  const [Update, setUpdate] = useState(0);
  const [notAdmin, setnotAdmin] = useState(true);
  const [isCustomer, setisCustomer] = useState(false);
  // const [Userid, setUserid] = useState()
  const [auth, setAuth] = useState();

  return (
    <RefreshContext.Provider
      value={{
        Update,
        setUpdate,
        notAdmin,
        setnotAdmin,
        isCustomer,
        setisCustomer,
        auth,
        setAuth,
      }}
    >
      {children}
    </RefreshContext.Provider>
  );
}
