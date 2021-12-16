import React, { useContext } from "react";
import ReactModal from "react-modal";
import { RegalosContext } from "../context/RegalosContext";

ReactModal.setAppElement("#root");

function Modal(props) {
  /*   const [showModal, setShowModal] = useState(false); */
  const { showModal, setShowModal } = useContext(RegalosContext);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="w-full">
        <button
          className="w-10/12 h-10 font-bold rounded text-buttexrcup-700 bg-buttercup-500 text-buttercup-700"
          onClick={handleOpenModal}
        >
          Agregar Regalo
        </button>
      </div>

      <ReactModal
        className="flex flex-col w-screen bg-buttercup-500"
        isOpen={showModal}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center w-1/12">
            <button
              className="w-6 h-6 font-bold text-center rounded left-10 bg-red-oxide-500 text-buttercup-500"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>

          <div className="flex justify-center w-11/12">
            <h1 className="flex items-center justify-center h-20 text-5xl font-bold text-center font-titulo">
              Agregar Regalo
            </h1>
          </div>
        </div>

        <div className="w-full">{props.children}</div>
      </ReactModal>
    </>
  );
}

export default Modal;
