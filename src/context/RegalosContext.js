import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const RegalosContext = createContext();

const RegalosContextProvider = (props) => {
  //Estados
  const [regalos, setRegalos] = useState([]);
  const [vacio, setVacio] = useState(false);

  // Agregar Regalo
  const addRegalo = (nombre, cantidad) => {
    setRegalos([...regalos, { nombre, id: uuid(), cantidad }]);
  };

  // Eliminar Regalo
  const delRegalo = (id) => {
    const newRegalos = regalos.filter((regalo) => regalo.id !== id);

    // Eliminar todos los Regalos

    setRegalos(newRegalos);
  };

  const clearRegalos = () => {
    setRegalos([]);
  };

  const handleVacio = (boolean) => {
    setVacio(boolean);
    setTimeout(() => {
      setVacio(false);
    }, 1500);
  };

  return (
    <RegalosContext.Provider
      value={{
        regalos,
        addRegalo,
        delRegalo,
        clearRegalos,
        vacio,
        handleVacio,
      }}
    >
      {props.children}
    </RegalosContext.Provider>
  );
};

export default RegalosContextProvider;
