import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import "../../css/inicio.css";

const ModalLogin = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    navigate("/inicio");
    console.log(form);
  };

  const handleHelp = (e) => {
    e.preventDefault();
    console.log(e);
  };

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <div>
      <Modal show={show} onHide={handleClose} id="modal">
        <div id="modalConteiner1">
          <div id="header">Inicia sesión</div>
          <div className="modal-input">
            <span className="modalspan">Email o número de teléfono</span>
            <input
              type="text"
              className="modalinput"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="modal-input">
            <span className="modalspan">Contraseña</span>
            <input
              type="password"
              className="modalinput"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="checkbox" name="modalradio" value="checked" />
            Recuérdame
            <button onClick={handleHelp} id="modalhelp">
              {" "}
              Necesitas ayuda?
            </button>
          </div>
          <div>
            <button
              className="modalbutton"
              name="password"
              onClick={handleSubmit}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
        <div id="modalConteiner2">
          ¿Primera vez en Netflix? Suscríbete ahora. Esta página está protegida
          por Google reCAPTCHA para comprobar que no eres un robot. Más info.
        </div>
      </Modal>
    </div>
  );
};

export default ModalLogin;
