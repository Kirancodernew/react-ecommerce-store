import { createContext, useContext, useState } from "react";

//create useContext:
const AuthContext = createContext();

//provider:
const AuthProvider = ({ children }) => {
  const [orderPopup, setOrderPopup] = useState(false);

  //handle order :
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <AuthContext.Provider value={{ handleOrderPopup,orderPopup}}>
      {children}
    </AuthContext.Provider>
  );
};

//custome hook
const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useGlobalContext };
