import React, { useContext } from "react";
import Form from "./Form";
import Regalo from "./Regalo";
import { RegalosContext } from "../context/RegalosContext";

const Lista = () => {
  const { regalos, clearRegalos, vacio, repetido } = useContext(RegalosContext);

  console.log("Repetido de la lista", repetido);

  return (
    <>
      {vacio || repetido ? (
        <div className="absolute flex items-center justify-center w-full h-screen">
          <h1 className="self-start w-full text-xl text-center text-red-700 bg-red-400">
            {repetido
              ? " Ese regalo ya se ingreso."
              : "Ingrese nombre y cantidad del regalo."}
          </h1>
        </div>
      ) : null}

      <div className="flex flex-col justify-between w-11/12 rounded bg-jewel-500 h-3/4 md:w-5/6 md:max-w-3xl">
        <div className="p-2">
          <h2 className="my-6 ml-6 text-left text-7xl text-buttercup-400 font-titulo">
            Regalos:
          </h2>
          <div className="flex justify-start">
            <Form />
          </div>
          <div className="">
            {regalos.length ? (
              <ul className="flex flex-col items-center justify-center mt-6 overflow-auto max-h-[26rem] ">
                {regalos.map((regalo) => {
                  return (
                    <Regalo
                      key={regalo.id}
                      regalo={regalo.nombre}
                      cantidad={regalo.cantidad}
                      id={regalo.id}
                    />
                  );
                })}
              </ul>
            ) : (
              <div className="p-2 mt-20 font-bold rounded bg-buttercup-500 text-buttercup-700">
                {" "}
                No hay Regalos en la lista!{" "}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            clearRegalos();
          }}
          className="p-[2px] h-10 w-30 md:w-1/2 text-center bg-red-oxide-400  text-red-oxide-500 font-bold rounded self-center mb-4 active:translate-y-1 focus:ring duration-75"
        >
          Borrar Todos
        </button>
      </div>
    </>
  );
};

export default Lista;
