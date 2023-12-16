import React from "react";
import "../styles/blogs.css";
import cadeira from "../assets/cadeira1.png";

const Blogs = () => {
    return (
        <div className="blogs" id="blogs">
            <h1 className="heading">our <span>blogs</span></h1>

            <div className="box-container">
                <div className="box">
                    <div className="content">
                        <img src={cadeira}></img>
                        <div className="icons">
                            <a href=""><i className="fas fa-user"></i> by user </a>
                            <a href=""><i className="fas fa-calendar"></i> 1st, may, 2021 </a>
                        </div>
                        <h3>fresh and organic vegitables and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
                        <a href="" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="content">
                        <img src={cadeira}></img>
                        <div className="icons">
                            <a href=""><i className="fas fa-user"></i> by user </a>
                            <a href=""><i className="fas fa-calendar"></i> 1st, may, 2021 </a>
                        </div>
                        <h3>fresh and organic vegitables and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
                        <a href="" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="content">
                        <img src={cadeira}></img>
                        <div className="icons">
                            <a href=""><i className="fas fa-user"></i> by user </a>
                            <a href=""><i className="fas fa-calendar"></i> 1st, may, 2021 </a>
                        </div>
                        <h3>fresh and organic vegitables and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
                        <a href="" className="btn">read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;