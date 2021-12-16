import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";

export const RegalosContext = createContext();

const RegalosContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("regalos")) || [];

  //Estados
  const [regalos, setRegalos] = useState(initialState);
  const [vacio, setVacio] = useState(false);
  const [repetido, setRepetido] = useState(false);
  const [editado, setEditado] = useState(null);
  const [editando, setEditando] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("regalos", JSON.stringify(regalos));
  }, [regalos]);

  // Agregar Regalo
  const addRegalo = (nombre, cantidad, imagen, destinatario) => {
    console.log(imagen);
    setRegalos([
      ...regalos,
      { nombre, id: uuid(), cantidad, imagen, destinatario },
    ]);
    console.log(regalos);
    setShowModal(false);
  };

  // Eliminar Regalo
  const delRegalo = (id) => {
    const newRegalos = regalos.filter((regalo) => regalo.id !== id);

    setRegalos(newRegalos);
  };

  // Eliminar todos los Regalos

  const clearRegalos = () => {
    setRegalos([]);
  };

  // Checkear por input vacio

  const handleVacio = (boolean) => {
    setVacio(boolean);
    setTimeout(() => {
      setVacio(false);
    }, 1500);
  };

  // Checkear por regalo repetido

  const handleRepetido = (nombre) => {
    const findRepetido = regalos.map((regalo) => regalo.nombre === nombre);

    const checker = findRepetido.includes(true);
    console.log("checker", checker);
    setRepetido(checker);
    setTimeout(() => {
      setRepetido(false);
    }, 1500);
    return checker;
  };

  const findRegalo = (id) => {
    const regalo = regalos.find((regalo) => regalo.id === id);

    setEditado(regalo);
  };

  const editRegalo = (nombre, id, cantidad) => {
    const newRegalo = regalos.map((regalo) =>
      regalo.id === id ? { nombre, id, cantidad } : regalo
    );
    setRegalos(newRegalo);
    setEditado(null);
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
        findRegalo,
        editRegalo,
        editado,
        handleRepetido,
        repetido,
        editando,
        setEditando,
        showModal,
        setShowModal,
      }}
    >
      {props.children}
    </RegalosContext.Provider>
  );
};

export default RegalosContextProvider;
