import React, { useContext, useEffect } from "react";
import Form from "./Form";
import Regalo from "./Regalo";
import { RegalosContext } from "../context/RegalosContext";

const Lista = () => {
  const { regalos, clearRegalos, repetido, sumarRegalos, total } =
    useContext(RegalosContext);

  useEffect(() => {
    sumarRegalos();
  }, [regalos, sumarRegalos]);

  console.log("Repetido de la lista", repetido);

  return (
    <>
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
                      imagen={regalo.imagen}
                      key={regalo.id}
                      regalo={regalo.nombre}
                      cantidad={regalo.cantidad}
                      id={regalo.id}
                      destinatario={regalo.destinatario}
                      precio={regalo.precio}
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
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center font-bold text-buttercup-700 text-center justify-center w-8/12 h-10 p-0.5 py-6 my-1 border-2 rounded border-buttercup-500 bg-buttercup-500">
            <p className="text-2xl">Total {`$${total}`}</p>
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
      <footer className="flex items-center justify-center mt-4 text-xl text-center text-black">
        Creado por{" "}
        <a
          className="ml-1 font-bold text-jewel-500"
          href="https://fsepulveda.netlify.app/"
        >{` Fsepulveda`}</a>
      </footer>
    </>
  );
};

export default Lista;
