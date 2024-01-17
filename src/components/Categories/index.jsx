import React from "react";
import "./style.css";
import cadeira from "../../assets/cadeira2.png";

const Categories = () => {
    return (
        <div className="categories anim" id="categories">
            <h1 className="heading">product <span>categories</span></h1>

            <div className="box-container">
                <div className="box">
                    <img src={cadeira}></img>
                    <h3>fresh chair</h3>
                    <p>upto 45% off</p>
                    <a href="" className="btn">shop now</a>
                </div>

                <div className="box">
                    <img src={cadeira}></img>
                    <h3>fresh chair</h3>
                    <p>upto 45% off</p>
                    <a href="" className="btn">shop now</a>
                </div>

                <div className="box">
                    <img src={cadeira}></img>
                    <h3>fresh chair</h3>
                    <p>upto 45% off</p>
                    <a href="" className="btn">shop now</a>
                </div>
            </div>
        </div>
    )
}

export default Categories;