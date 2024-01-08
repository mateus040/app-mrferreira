import React, { useEffect, useState } from "react";
import './style.css';
import logo from '../../assets/logo.jpeg';
import FormLogin from "../../components/FormLogin";

const Header = () => {

    const [featuresDropdown, setFeaturesDropdown] = useState(false);

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

    const toggleFeaturesDropdown = () => {
        setFeaturesDropdown(!featuresDropdown);
    };

    return (
        <div className="header">
            <a href="" className="logo">
                <img src={logo}></img>
            </a>

            <nav className="navbar">
            <a href="/">Home</a>
                <div className="dropdown">
                    <a href="#" onClick={toggleFeaturesDropdown}>Features <i className="fa-solid fa-caret-down"></i></a>
                    {featuresDropdown && (
                        <div className="dropdown-content">
                            <a href="/empresa1">Empresa 1</a>
                            <a href="#">Empresa 2</a>
                        </div>
                    )}
                </div>
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