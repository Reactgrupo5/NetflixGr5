import React from "react";
import Img from "../assets/img/Img";
import "../css/inicio.css";
import LangSel from "../components/elements/LangSel";
import InicButton from "../components/elements/InicButton";
import InicEmail from "../components/elements/InicEmail";

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
