import React from "react";
import { Route, Routes } from "react-router-dom";
import ModalLogin from "../components/login/ModalLogin";
import ModalCreateCuenta from "../components/login/ModalCreateCuenta";

import Inicio from "../views/Inicio";
import Home from "../views/Home";

const rutas = () => {
  return (
    <>
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
        <Route
          path="inicio"
          element={
            <div>
              <Inicio />
            </div>
          }
        />
        <Route path="create" element={<ModalCreateCuenta />} />

        {/* <Route path="contexto" element={<Contexto />} />
          <Route path="rutas" element={<HooksYFuncionesDeRutas />} /> */}
      </Routes>
      ;
    </>
  );
};

export default rutas;
