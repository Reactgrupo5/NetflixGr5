import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalLogin from "./components/login/ModalLogin";
import ModalCreateCuenta from "./components/login/ModalCreateCuenta";

import Home from "./views/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<div>404</div>} />
          <Route
            path=""
            element={
              <div>
                <Home />
              </div>
            }
          />
          <Route
            path="login"
            element={
              <div>
                <ModalLogin />
              </div>
            }
          />
          <Route path="create" element={<ModalCreateCuenta />} />

          {/* <Route path="contexto" element={<Contexto />} />
          <Route path="rutas" element={<HooksYFuncionesDeRutas />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
