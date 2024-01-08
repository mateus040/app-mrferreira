import React from "react";
import "./style.css";
import cadeira1 from "../../assets/cadeira1.png";
import cadeira2 from "../../assets/cadeira2.png";
import cadeira3 from "../../assets/cadeira3.png";

const Features = () => {
    return (
        <div className="features" id="features">
            <h1 className="heading"> our <span>features</span> </h1>

            <div className="box-container">
                <div className="box">
                    <img src={cadeira1}></img>
                    <h3>Fresh and organic</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                    <a href="" className="btn">read more</a>
                </div>

                <div className="box">
                    <img src={cadeira2}></img>
                    <h3>Fresh and organic</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                    <a href="" className="btn">read more</a>
                </div>

                <div className="box">
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