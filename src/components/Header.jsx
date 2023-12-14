import React, { useEffect } from "react";
import '../styles/header.css';

const Header = () => {

    useEffect(() => {
        let header = document.querySelector('.header');
        let navbar = document.querySelector('.header .flex .navbar');
        let MenuBtn = document.querySelector('#menu-btn');

        MenuBtn.onclick = () => {
            navbar.classList.toggle('active');
            MenuBtn.classList.toggle('fa-times');
        }

        window.onscroll = () => {
            navbar.classList.remove('active');
            MenuBtn.classList.remove('fa-times');
        }

        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    })

    return (
        <header className="header">
            <section className="flex">
                <a href="#home" className="logo">
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"}></img>
                </a>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div id="menu-btn" className="fas fa-bars-staggered">

                </div>
            </section>
        </header>
    )
}

export default Header;