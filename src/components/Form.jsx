import { React, useContext, useState } from "react";
import { RegalosContext } from "../context/RegalosContext";

function Form() {
  const { addRegalo, handleVacio } = useContext(RegalosContext);

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(null);

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setCantidad(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      handleVacio(true);
    } else {
      addRegalo(nombre, cantidad);
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
          />
        </div>

        <button className="p-[2px] h-10 w-30 md:w-3/12 bg-buttercup-500 border-transparent text-red-oxide-400 font-bold rounded active:transform active:translate-y-1">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default Form;
