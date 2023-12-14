import React, { useEffect } from "react";
import '../styles/header.css';
import FormLogin from "./FormLogin";

const Header = () => {

    useEffect(() => {
        let loginForm = document.querySelector('.login-form');

        document.querySelector('#login-btn').onclick = () => {
            loginForm.classList.toggle('active');
            navbar.classList.remove('active');
        }

        let navbar = document.querySelector('.navbar');

        document.querySelector('#menu-btn').onclick = () => {
            navbar.classList.toggle('active');
        }

        window.onscroll = () => {
            navbar.classList.remove('active');
            loginForm.classList.remove('active');
        }
    })

    return (
        <div className="header">
            <a href="" className="logo">
                <img src={process.env.PUBLIC_URL + "/images/logo.png"}></img>
            </a>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#products">Products</a>
                <a href="#review">Review</a>
                <a href="#about">About</a>
                <a href="#blogs">Blogs</a>
            </nav>

            <div className="icons">
                <div className="fas fa-bars" id="menu-btn"></div>
                <div className="fas fa-lock" id="login-btn"></div>
            </div>

            <FormLogin />

        </div>

    )
}

export default Header;