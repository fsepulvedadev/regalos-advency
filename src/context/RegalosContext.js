import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";

export const RegalosContext = createContext();

const RegalosContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("regalos")) || [];

  const regalosAleatorios = [{
      nombre: 'Osito de Peluche',
      id: uuid(),
      cantidad: '1',
      imagen: 'https://m.media-amazon.com/images/I/81b5Wnh3XbL._AC_SX425_.jpg',
      destinatario: '',
      precio: '350'
  },
      {nombre: 'Botella de Vino',
      id: uuid(),
      cantidad: '1',
      imagen: 'https://dam.esquirelat.com/wp-content/uploads/2020/11/LA-CETTO-vinos.jpg',
      destinatario: '',
      precio: '150'},

      {nombre: 'Camiseta de Boca',
      id: uuid(),
      cantidad: '1',
      imagen: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/170/877/products/002-4092-028_zoom11-ee4f445bde22f8528415913950216278-640-0.jpg',
      destinatario: '',
      precio: '800'},
      {nombre: 'Barra de Oro',
      id: uuid(),
      cantidad: '1',
      imagen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAABYlBMVEX////82ojmwHf8+fHdtnOKZzMAAAD/3ovqxHr4//////z/4Iz72Yf///qHZDD9+/Xvx3r//9b10oPju3bvy36SbjiUcTr/5I7mvnjhv3SdekHgvnO/nVvlu2m0j0qEYC3fvYLTsWqsik2if0Xqzpjv4cKMiYHOqWGTkYvWtGzTrGvp6OPp6+28vb1RUFDPrmmcnZ3BnFPV1tbz8uZMJgDx8vSDfnO5l1atram6urfGxsOcgEjS0s/x6dN8bE3AnGKOdkaEbEMUAABGNiHt2KTy5LRSRzxrQQCLais+FQCngDsgBwAUEhVnY1+ojlUyMTE+IgCDgoFxXTNycnKHXhRRPxsvHQB1SwCbdC5KPTA+PT4+KhFiY2RDMQA3GABeSx0eISn/5J+ThW0vDgAzIhVhRAMAABLt161HSVDGnEqCfXTVq1tdSil9aD5MOh43MCt6bljp4s/iyZ6ehVq2n3LKtYb4ht4PAAAORElEQVR4nO2b/VvaWBbHIYQkKERIAoMQBAKWhuqIWkvrSwWr7XS6Y1c67+12592Zqe06093/f89NBJKQ5OZV9Hnu9xf7zFj74XDu93tuDiYSRERERERERERERERERERERERERERERERERERERERERERERERERERERES7vbvr82YIqrWnzzq1z5hH8+YIpIfPP0+y7CcbL/5xC+v/xTN1MQliF0+Zl/vzpvGn3X9+m2WTuhaFAfPpvXkT+dDZ/c5icqpqdcS82pk3lEetPflSYpNG+pK88RVzd95cntR7vrlogk+ylXqxc/g183DeaFjtPP1meTFp0XKdr1eacHx3543nrnXkk1b45KLCp3m+1YTjuzZvQhe9eladKTySwKfTwK9s3ODju2XwSbNYGeGn+bQsf8X05s1pK4tPmpQtpjXxxU7/a+bmpe/ad18K9oXXir9R1/HT2vH9fmveuGbN+qQFv8Jf4evH980Nav+dL76RHLtGp18eF398fG9M+6+/XXGruybkmlP+NErfm9H+Tj5pLr5koNeP74uX82//rdff2gSUDb5swteP77zbv3dfxRde09g1p+3fUgdzHd7Wnrr5pKX4G/W0lb/fHM3v7vgQfNIje9Lomqbj+685tT/WJy30yzP0wF9q9o/m0P67b1f8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',
      destinatario: '',
      precio: '2000'}]

  //Estados
  const [regalos, setRegalos] = useState(initialState);
  const [vacio, setVacio] = useState(false);
  const [repetido, setRepetido] = useState(false);
  const [editado, setEditado] = useState(null);
  const [editando, setEditando] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [aleatorios, setAleatorios] = useState(regalosAleatorios);
  const [total, setTotal] = useState(regalosAleatorios);
  const [duplicado, setDuplicado] = useState(regalosAleatorios);

  useEffect(() => {
    localStorage.setItem("regalos", JSON.stringify(regalos));
  }, [regalos]);

  // Agregar Regalo
  const addRegalo = (nombre, cantidad, imagen, destinatario,precio) => {
    console.log(imagen);
    setRegalos([
      ...regalos,
      { nombre, id: uuid(), cantidad, imagen, destinatario,precio },
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

  const handleRepetido = (nombre,destinatario) => {
    const findRepetido = regalos.map((regalo) => regalo.nombre === nombre && regalo.destinatario === destinatario);
      console.log("findRepetido", findRepetido);
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

  const editRegalo = (nombre, id, cantidad, imagen, destinatario,precio) => {
    const newRegalo = regalos.map((regalo) =>
      regalo.id === id ? { nombre, id, cantidad, imagen, destinatario,precio } : regalo
    );
    setRegalos(newRegalo);
    setEditado(null);
  };

  const sumarRegalos = () =>{
      let sumatoria = 0
      regalos.map(regalo => sumatoria += parseInt(regalo.precio))
      setTotal(sumatoria)
  }

  const handleDuplicado = (id) => {
      const duplicado = regalos.find((regalo) => regalo.id === id);
      setDuplicado(duplicado)
  }

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
          aleatorios,
          setAleatorios,
          setEditado,
          sumarRegalos,
          total,
          duplicado,
          setDuplicado,
          handleDuplicado
      }}
    >
      {props.children}
    </RegalosContext.Provider>
  );
};

export default RegalosContextProvider;
