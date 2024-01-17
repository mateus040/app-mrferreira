import React from "react";
import './style.css';
import imagem from '../../assets/log.svg';

const Home = () => {
    return (
        <div className="home-content anim" id="home">

            <div className="flex">
                <div className="content">
                    <h3 className="home-text">O conforto que você merece!</h3>
                    <p className="home-description">Descubra as nossas coleções e adquira peças que não apenas ocupam espaço, mas transformam ambientes!</p>
                    <a href="" className="btn">Venha conhecer</a>
                </div>

                <div className="image">
                    <img src={imagem} />
                </div>
            </div>
        </div>
    );
};

export default Home;