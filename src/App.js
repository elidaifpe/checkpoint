import React from "react";
import {BrowserRouter as Rota,Routes,Route } from "react-router-dom";
import Telaprincipal from "./pages/Telaprincipal";

function App() {
  return (
    <Rota>
      <Routes>
        <Route path="/principal"  element={<Telaprincipal />}/>
      </Routes>
    </Rota>
    )
}

export default App;
