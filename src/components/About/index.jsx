import React from "react";
import "./style.css";
import logo from "../../assets/logo-transparente.png";

const About = () => {
    return (
        <div className="about" id="about">
            <h3 className="heading">about <span>company</span></h3>
            <div className="box-container">
                <div className="box">
                    <div className="about-img">
                        <img src={logo}></img>
                    </div>

                    <div className="about-text">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem nihil voluptates cumque quidem molestias. Nihil cumque tempore nulla pariatur!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sunt optio aut earum. Ea nemo incidunt odit esse quidem officia enim tempore id reprehenderit.</p>
                        <a href="" className="btn">order now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;