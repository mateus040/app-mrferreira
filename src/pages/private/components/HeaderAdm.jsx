import React, { useEffect } from "react";
import "../styles/header.css";
import logo from "../../../assets/logo-transparente.png";
import icon_user from "../../../assets/icone-user.png";

const HeaderAdm = () => {

    useEffect(() => {
        let btn = document.querySelector("#btn-icon");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function() {
            sidebar.classList.toggle("active");
        }
    })

    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">
                    <img src={logo} className="logo-image"></img>
                    <div className="logo-name">MR Ferreira</div>
                </div>
                <i class="fa-solid fa-bars" id="btn-icon"></i>
            </div>
            <ul className="nav-list">
                <li>
                    <a href="/home/admin">
                        <i class="fa-solid fa-house"></i>
                        <span className="links-name">dashboard</span>
                    </a>
                    <span className="tooltip">dashboard</span>
                </li>

                <li>
                    <a href="">
                        <i class="fa-solid fa-user"></i>
                        <span className="links-name">user</span>
                    </a>
                    <span className="tooltip">user</span>
                </li>

                <li>
                    <a href="">
                        <i class="fa-solid fa-comment"></i>
                        <span className="links-name">messages</span>
                    </a>
                    <span className="tooltip">messages</span>
                </li>

                <li>
                    <a href="">
                        <i class="fa-solid fa-chart-pie"></i>
                        <span className="links-name">Analytics</span>
                    </a>
                    <span className="tooltip">analytics</span>
                </li>

                <li>
                    <a href="">
                        <i class="fa-solid fa-gear"></i>
                        <span className="links-name">settings</span>
                    </a>
                    <span className="tooltip">settings</span>
                </li>
            </ul>
            <div className="profile-content">
                <div className="profile">
                    <div className="profile-details">
                        <img src={icon_user}></img>
                        <div className="name-job">
                            <div className="name">Prem Shahi</div>
                            <div className="job">Administrador</div>
                        </div>
                    </div>
                    <i class="fa-solid fa-right-from-bracket" id="log-out"></i>
                </div>
            </div>
        </div>
    )
}

export default HeaderAdm;