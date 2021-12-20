import { React, useContext, useState, useEffect } from "react";
import { RegalosContext } from "../context/RegalosContext";
import Modal from "./Modal";

function Form() {
  const {
    addRegalo,
    handleVacio,
    editado,
    editRegalo,
    handleRepetido,
    setShowModal,
    vacio,
    repetido,
    editando,
      aleatorios,
      setAleatorios,
      setEditado,
      duplicado
  } = useContext(RegalosContext);

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [imagen, setImagen] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [precio, setPrecio] = useState("");


  useEffect(() => {
    if (editado !== null) {
      setNombre(editado.nombre);
      setCantidad(editado.cantidad);
      setDestinatario(editado.destinatario);
      setImagen(editado.imagen);
      setPrecio(editado.precio)
      console.log(editado);
    } else {
      setNombre("");
    }
  }, [editado]);

  useEffect(() => {
    if (duplicado !== null) {
      setNombre(duplicado.nombre);
      setCantidad(duplicado.cantidad);
      setDestinatario(duplicado.destinatario);
      setImagen(duplicado.imagen);
      setPrecio(duplicado.precio)
      setShowModal(true)
    } else {
      setNombre("");
    }
  }, [duplicado]);

  const handleChangeImagen = (e) => {
    const newImage = e.target.value;

    newImage.toString();

    setImagen(newImage);
  };
  const handleSorpresa = (e) => {
    e.preventDefault()
   const numAleatorio = Math.floor(Math.random() * (aleatorios.length + 1))

   const selected = aleatorios[numAleatorio]
    setEditado(selected)
    addRegalo(editado.nombre,editado.cantidad,editado.imagen,editado.destinatario,editado.precio)
  }
  const handleChangeDestinatario = (e) => {
    setDestinatario(e.target.value);
  };
  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setCantidad(e.target.value);
  };

  const handleChangePrecio = (e) => {
    setPrecio(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(handleRepetido(nombre,destinatario));

    if (editado === null) {
      if (nombre === "") {
        handleVacio(true);
      } else if (handleRepetido(nombre,destinatario)) {
        console.log("repetido");
      } else {
        addRegalo(nombre, cantidad, imagen, destinatario,precio);
        setNombre("");
      }
    } else {
      editRegalo(nombre, editado.id, cantidad, imagen, destinatario,precio);
      setNombre("");
      setShowModal(false);
    }
  };

  return (
    <Modal>
      {vacio || repetido ? (
        <div className="absolute flex items-center justify-center w-full h-screen">
          <h1 className="self-start w-full text-xl text-center text-red-700 bg-red-400">
            {repetido && !editando
              ? " Ese regalo ya se ingreso."
              : "Ingrese nombre y cantidad del regalo."}
          </h1>
        </div>
      ) : null}
      <div className="flex flex-col items-center justify-start w-full h-screen bg-jewel-500">
        <form
          on
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          className="flex flex-col items-center justify-center w-full h-2/4"
        >
          <div className="flex flex-col items-center justify-around text-center text-black w-12/12 md:w-10/12">
            <div className="flex items-center justify-around w-12/12 md:w-full">
              <div className="flex flex-col items-center justify-around w-full my-4 md:w-10/12">
                <label
                  className="pr-2 font-bold text-buttercup-500"
                  htmlFor="text-regalo"
                >Regalo
                </label>
                <input
                  onChange={handleChangeNombre}
                  id="text-regalo"
                  type="text"
                  className="w-10/12 h-10 border-transparent rounded bg-red-oxide-400 text-buttercup-500"
                  value={nombre}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full my-4 md:w-10/12">
                <label
                  className="pr-2 font-bold text-buttercup-500"
                  htmlFor="text-destinatario"
                >
                  Destinatario
                </label>
                <input
                  onChange={handleChangeDestinatario}
                  id="text-destinatario"
                  type="text"
                  className="w-10/12 h-10 border-transparent rounded bg-red-oxide-400 text-buttercup-500"
                  value={destinatario}
                />
              </div>
              <div>
                <label
                    className="pr-2 font-bold text-buttercup-500"
                    htmlFor="precio"
                >
                  Precio
                </label>
                <input
                    onChange={handleChangePrecio}
                    id="precio"
                    type="number"
                    className="w-full h-10 border-transparent rounded bg-red-oxide-400 text-buttercup-500"
                    value={precio}
                />
              </div>
            </div>

            <div className="flex items-center justify-around w-full md:w-full">
              <div className="flex flex-col items-center justify-around w-10/12 md:w-6/12">
                <label
                  className="pr-2 font-bold text-buttercup-500"
                  htmlFor="url-imagen"
                >
                  Imagen
                </label>
                <input
                  onChange={handleChangeImagen}
                  id="url-imagen"
                  type="text"
                  className="w-full h-10 border-transparent rounded bg-red-oxide-400 text-buttercup-500"
                  value={imagen}
                />
              </div>

              <div className="flex flex-col items-center justify-center w-8/12 my-4 md:w-6/12">
                <label
                  className="p-0 font-bold text-center md:pr-2 text-buttercup-500"
                  htmlFor="cantidad"
                >
                  Cantidad
                </label>

                <input
                  onChange={handleChangeNumber}
                  className="w-4/12 h-10 ml-2 text-center border-transparent rounded md:w-2/12 bg-red-oxide-400 text-buttercup-500"
                  type="number"
                  name=""
                  id="cantidad"
                  min="1"
                  value={cantidad}
                />
              </div>
            </div>
          </div>
          <div className='w-full flex justify-around'>
            <button className="p-[2px] h-10 w-30 md:w-3/12 bg-buttercup-500 border-transparent text-red-oxide-400 font-bold rounded active:transform active:translate-y-1">
              {editado !== null ? "Editar" : " Agregar"}
            </button>
            <button onClick={handleSorpresa} className="p-[2px] h-10 w-30 md:w-3/12 bg-buttercup-500 border-transparent text-red-oxide-400 font-bold rounded active:transform active:translate-y-1">
              Sorprendeme!
            </button>
          </div>

        </form>
      </div>
    </Modal>
  );
}

export default Form;
