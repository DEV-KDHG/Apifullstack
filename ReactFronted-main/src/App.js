import logo from "./logo.svg";
import "./App.css";
import ListClienteComponentes from "./components/ListClienteComponentes";
import HeaderComponet from "./components/HeaderComponet";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddClienteComponents from "./components/AddClienteComponents";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponet />
        <div  className="container">
          <Routes>
            <Route path="/" element={<ListClienteComponentes />} />

            <Route path="/clientes" element={<ListClienteComponentes />} />
            <Route path="/add-cliente" element={<AddClienteComponents />} />
          </Routes>
        </div>

        <FooterComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;