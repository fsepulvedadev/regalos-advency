import React, { useContext } from "react";
import { RegalosContext } from "../context/RegalosContext";
import { PencilAltIcon, XIcon } from "@heroicons/react/outline";

const Regalo = (props) => {
  const { delRegalo, findRegalo } = useContext(RegalosContext);

  return (
    <li
      id={props.id}
      className="flex items-center justify-between w-11/12 h-10 py-6 my-1 border-2 rounded border-buttercup-500 bg-buttercup-500"
    >
      <div className="flex items-center justify-between w-8/12 ml-2 font-sans text-xl font-bold text-jewel-500 md:w-1/2">
        <p>{props.cantidad}</p>
        <p>{props.regalo}</p>
      </div>
      <div className="flex items-center w-1/6 justify-evenly">
        <button
          onClick={() => {
            findRegalo(props.id);
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
