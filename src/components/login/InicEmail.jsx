import React from "react";
import { useNavigate } from "react-router-dom";

import "../../css/inicio.css";

const InicEmail = () => {
  const navigate = useNavigate();

  const texto = "Comenzar  >";

  const handleClick = (e) => {
    console.log(e.target);
    navigate("/create");
  };

  return (
    <div id="textoDEabajo">
      <div id="textoDEabajoGrande" className="textoDeabajo">
        <div>Peliculas y series ilimitadas</div>
        <div>y mucho más</div>
      </div>
      <div id="textoDEabajoMediano" className="textoDeabajo">
        Disfruta cuando quieras. Cancela Cuando quieras
      </div>
      <div id="textoDEabajoChico" className="textoDeabajo">
        ¿quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix
      </div>
      <div id="textoEmailButton">
        <input type="email" id="textoEmail" placeholder="Email" />
        <button id="textoButton" onClick={handleClick}>
          {texto}
        </button>
      </div>
    </div>
  );
};

export default InicEmail;
