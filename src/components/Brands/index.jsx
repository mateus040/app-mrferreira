import React from "react";
import "./style.css";
import nike from "../../assets/nike.jpg";
import adidas from "../../assets/adidas.jpeg";
import amazon from "../../assets/amazon.png";
import amd from "../../assets/amd.png";
import facitec from "../../assets/facitec.jpg";
import jahuflex from "../../assets/jahuflex.png";

const Brands = () => {
    return (
        <div className="brands" id="brands">

            <div className="brands-content">
                <div className="brands-container">
                    <img src={nike} />
                    <img src={adidas} />
                    <img src={amazon} />
                    <img src={amd} />
                    <img src={jahuflex} />
                    <img src={facitec} />
                </div>

                <div className="brands-container">
                    <img src={nike} />
                    <img src={adidas} />
                    <img src={amazon} />
                    <img src={amd} />
                    <img src={jahuflex} />
                    <img src={facitec} />
                </div>
            </div>
        </div>
    )
}

export default Brands;