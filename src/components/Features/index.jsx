import React, { useLayoutEffect } from "react";
import "./style.css";
import cadeira1 from "../../assets/cadeira1.png";
import cadeira2 from "../../assets/cadeira2.png";
import cadeira3 from "../../assets/cadeira3.png";

const Features = () => {   
    return (
        <div className="features anim" id="features">
            <h1 className="heading"> our <span>features</span> </h1>

            <div className="box-container anim">
                <div className="box" id="box-1">
                    <img src={cadeira1}></img>
                    <h3>Fresh and organic</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                    <a href="" className="btn">read more</a>
                </div>

                <div className="box" id="box-2">
                    <img src={cadeira2}></img>
                    <h3>Fresh and organic</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                    <a href="" className="btn">read more</a>
                </div>

                <div className="box" id="box-3">
                    <img src={cadeira3}></img>
                    <h3>Fresh and organic</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                    <a href="" className="btn">read more</a>
                </div>
            </div>
        </div>
    )
}

export default Features;