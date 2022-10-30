import React from "react";
import Img from "../assets/img/Img";
import "../css/inicio.css";
import LangSel from "../components/LangSel";
import InicButton from "../components/InicButton";
import InicEmail from "../components/login/InicEmail";

const Home = () => {
  return (
    <div>
      <div id="inicial">
        <img src={Img[0]} />
        <div id="Sel-Butt">
          <LangSel />
          <InicButton />
        </div>
      </div>
      <InicEmail />
    </div>
  );
};

export default Home;
