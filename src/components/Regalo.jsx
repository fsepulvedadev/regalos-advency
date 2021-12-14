import React, { useContext } from "react";
import { RegalosContext } from "../context/RegalosContext";

const Regalo = (props) => {
  const { delRegalo } = useContext(RegalosContext);

  return (
    <li
      id={props.id}
      className="flex items-center justify-between w-11/12 h-10 py-6 my-1 border-2 rounded border-buttercup-500 bg-buttercup-500"
    >
      <div className="flex items-center justify-between w-8/12 ml-2 font-sans text-xl font-bold text-jewel-500 md:w-1/2">
        <p>{props.cantidad}</p>
        <p>{props.regalo}</p>
      </div>
      <button
        onClick={() => {
          delRegalo(props.id);
        }}
        className="w-8 h-8 p-1 mr-4 font-bold text-center transition-all duration-75 rounded text-red-oxide-500 bg-red-oxide-400 active:transform active:translate-y-1 focus:ring"
      >
        X
      </button>
    </li>
  );
};

export default Regalo;
