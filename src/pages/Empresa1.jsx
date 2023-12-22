import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "../styles/empresa1.css";
import Header from "../components/Header";
import cadeira from "../assets/cadeira1.png";

const Empresa1 = () => {
    return (
        <div className="empresa1">
            <header className="header">
                <Header />
            </header>

            <section className="empresa-home">
                <div className="heading">the <span>empresa1</span></div>

                <div className="box-container">
                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={cadeira}></img>
                        <h3>fresh and chair</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
                        <a href="" className="btn">read more</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Empresa1;