import React from "react";
import {BrowserRouter as Rota,Routes,Route } from "react-router-dom";
import Telaprincipal from "./pages/Telaprincipal";
import CadastroCliente from "./pages/CadastroCliente";

function App() {
  return (
    <Rota>
      <Routes>
        <Route path="/principal"  element={<Telaprincipal />}/>
        <Route path="/cadastrocliente"  element={<CadastroCliente/>}/>
      </Routes>
    </Rota>
    )
}

export default App;
