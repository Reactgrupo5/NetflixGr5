import React from "react";
import { Route, Routes } from "react-router-dom";
import ModalLogin from "../features/home/login/ModalLogin";
import ModalCreateCuenta from "../features/home/login/ModalCreateCuenta";

import Movies from "../features/movies/Movies";

import Inicio from "../features/home/views/Inicio"
import Home from "../features/home/views/Home";
import Logout from "../features/home/logout/Logout";

const rutas = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="" element={<Home />}/>
        <Route path="login" element={<ModalLogin />}/>
        <Route path="inicio" element={<Inicio />}/>
        <Route path="create" element={<ModalCreateCuenta />} />        
        <Route path="movie" element={<Movies />}/>
        <Route path="logout" element={<Logout />}/>

        {/* <Route path="contexto" element={<Contexto />} />
          <Route path="rutas" element={<HooksYFuncionesDeRutas />} /> */}
      </Routes>
      
    </>
  );
};

export default rutas;
