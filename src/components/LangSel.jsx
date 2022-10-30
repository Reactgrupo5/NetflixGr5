import React from "react";
import "../css/inicio.css";
import { mundito } from "../assets/img/Img";

const LangSel = () => {
  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div id="LangSel">
      <img src={mundito} id="mundito" />
      <select onChange={handleSelectChange}>
        <option value="spanish" defaultValue>
          Español
        </option>
        <option value="english">English</option>
      </select>
    </div>
  );
};

export default LangSel;
