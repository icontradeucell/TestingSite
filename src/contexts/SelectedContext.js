import React, { createContext, useState } from "react";

export const SelectedContext = createContext();

const SelectedContextProvider = (props) => {
  const handleChecked = (name) => {
    switch (name) {
      case "A":
        Achecked ? setAchecked(false) : setAchecked(true);
        setBchecked(false);
        setCchecked(false);
        setDchecked(false);
        break;
      case "B":
        Bchecked ? setBchecked(false) : setBchecked(true);
        setAchecked(false);
        setCchecked(false);
        setDchecked(false);
        break;
      case "C":
        Cchecked ? setCchecked(false) : setCchecked(true);
        setAchecked(false);
        setBchecked(false);
        setDchecked(false);
        break;
      case "D":
        Dchecked ? setDchecked(false) : setDchecked(true);
        setAchecked(false);
        setBchecked(false);
        setCchecked(false);
        break;
    }
  };

  const [Achecked, setAchecked] = useState(false);
  const [Bchecked, setBchecked] = useState(false);
  const [Cchecked, setCchecked] = useState(false);
  const [Dchecked, setDchecked] = useState(false);

  return (
    <SelectedContext.Provider
      value={{ Achecked, Bchecked, Cchecked, Dchecked, handleChecked }}
    >
      {props.children}
    </SelectedContext.Provider>
  );
};

export default SelectedContextProvider;
