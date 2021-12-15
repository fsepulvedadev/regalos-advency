import { React, useContext, useState, useEffect } from "react";
import { RegalosContext } from "../context/RegalosContext";

function Form() {
  const { addRegalo, handleVacio, editado, editRegalo, handleRepetido } =
    useContext(RegalosContext);

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (editado !== null) {
      setNombre(editado.nombre);
      setCantidad(editado.cantidad);
      console.log(editado);
    } else {
      setNombre("");
    }
  }, [editado]);

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setCantidad(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(handleRepetido(nombre));

    if (editado === null) {
      if (nombre === "") {
        handleVacio(true);
      } else if (handleRepetido(nombre)) {
        console.log("repetido");
      } else {
        addRegalo(nombre, cantidad);
        setNombre("");
      }
    } else {
      editRegalo(nombre, editado.id, cantidad);
      setNombre("");
    }
  };

  return (
    <div className="w-full">
      <form
        on
        onSubmit={handleSubmit}
        action="#"
        method="POST"
        className="flex items-center justify-center "
      >
        <div className="flex items-center justify-center text-black md:w-8/12">
          <input
            onChange={handleChangeNombre}
            id="text-regalo"
            type="text"
            className="w-9/12 h-10 border-transparent rounded bg-red-oxide-400 text-buttercup-500"
            value={nombre}
          />
          <input
            onChange={handleChangeNumber}
            className="w-2/12 h-10 ml-2 text-center border-transparent rounded bg-red-oxide-400 text-buttercup-500"
            type="number"
            name=""
            id="cantidad"
            min="1"
            value={cantidad}
          />
        </div>

        <button className="p-[2px] h-10 w-30 md:w-3/12 bg-buttercup-500 border-transparent text-red-oxide-400 font-bold rounded active:transform active:translate-y-1">
          {editado !== null ? "Editar" : " Agregar"}
        </button>
      </form>
    </div>
  );
}

export default Form;
