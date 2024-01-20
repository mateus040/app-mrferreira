import React, { useEffect } from "react";
import './style.css';
import FormLogin from "../../components/FormLogin";

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
            loginForm.classList.remove('active');
        }

        window.onscroll = () => {
            navbar.classList.remove('active');
            loginForm.classList.remove('active');
        }
    })

    return (
        <div className="header">
            <a href="" className="logo">
                <h1>MR Ferreira</h1>
                <p>Representações</p>
            </a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="#">Features</a>
                <a href="#products">Products</a>
                <a href="#review">Review</a>
                <a href="#about">About</a>
                <a href="/home/admin">Contact</a>
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