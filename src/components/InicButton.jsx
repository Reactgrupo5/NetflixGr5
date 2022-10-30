import React from "react";
import { useNavigate } from "react-router-dom";

const InicButton = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.target);
    navigate("/login");
  };

  return (
    <div>
      <button id="InicButton" onClick={handleClick}>
        Iniciar sesión
      </button>
    </div>
  );
};

export default InicButton;
