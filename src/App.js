import Lista from "./components/Lista";
import RegalosContextProvider from "./context/RegalosContext";

function App() {
  return (
    <RegalosContextProvider>
      <div className="text-center bg-[url('/assets/fondo.jpg')] h-screen w-full flex flex-col justify-center items-center">
        <Lista />
      </div>
    </RegalosContextProvider>
  );
}

export default App;
