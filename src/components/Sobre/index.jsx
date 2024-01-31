import React from "react";
import "./style.css";
import adidas from "../../assets/adidas-branco.png";
import facitec from "../../assets/images/facitec-cinza.png";
import jahuflex from "../../assets/images/jahuflex-cinza.png";

export default function Sobre() {
  return (
    <div className="sobre">
      <div className="heading-sobre">
        <strong>Veja nossas empresas parceiras!</strong>
      </div>

      <div className="logos-container">
        <img src={facitec} alt="" />
        <img src={jahuflex} alt="" />
        <img src={facitec} alt="" />
        <img src={jahuflex} alt="" />
        <img src={facitec} alt="" />
        <img src={jahuflex} alt="" />
        <img src={facitec} alt="" />
        <img src={jahuflex} alt="" />
        <img src={facitec} alt="" />
        <img src={jahuflex} alt="" />
        <img src={facitec} alt="" />
      </div>
    </div>
  );
}
