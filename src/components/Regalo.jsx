import React, { useContext } from "react";
import { RegalosContext } from "../context/RegalosContext";
import { PencilAltIcon, XIcon } from "@heroicons/react/outline";

const Regalo = (props) => {
  const { delRegalo, findRegalo, setEditando, setShowModal } =
    useContext(RegalosContext);

  return (
    <li
      id={props.id}
      className="flex items-center justify-between w-full h-24 p-0.5 py-6 my-1 border-2 rounded md:w-11/12 md:h-10 border-buttercup-500 bg-buttercup-500"
    >
      <div className="text-xl font-bold md:ml-4 text-red-oxide-400">
        <p>{props.cantidad}x </p>
      </div>
      <div>
        <img
          className="object-scale-down w-20 h-12"
          src={props.imagen}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start w-8/12 ml-2 font-sans font-bold text-md md:text-xl text-jewel-500 md:w-1/2">
        <p>{props.regalo}</p>
        <h2 className="font-normal">{props.destinatario}</h2>
      </div>
      <div className="flex items-center w-1/6 justify-evenly">
        <button
          onClick={() => {
            findRegalo(props.id);
            setEditando(true);
            setShowModal(true);
          }}
          className="w-8 h-8 p-0 font-bold text-center transition-all duration-75 rounded text-jewel-500 bg-red-oxide-400 active:transform active:translate-y-1 focus:ring"
        >
          <PencilAltIcon />
        </button>

        <button
          onClick={() => {
            delRegalo(props.id);
          }}
          className="w-8 h-8 p-0 ml-1 font-bold text-center transition-all duration-75 rounded text-jewel-500 bg-red-oxide-400 active:transform active:translate-y-1 focus:ring"
        >
          <XIcon />
        </button>
      </div>
    </li>
  );
};

export default Regalo;
