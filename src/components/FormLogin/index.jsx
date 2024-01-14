import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:800/api/login", {
                email, password,
            });

            const token = response.data.token;

            localStorage.setItem("token", token);

            navigate("/home/admin");
        } catch (err) {
            toast.error("Erro ao fazer login: " + err.response.data.message, {
                theme: "colored",
                style: {
                    fontSize: '1.6rem',
                },
            });
            console.error("Erro ao fazer login: ", err.response.data.message);
        }
    }

    return (
        <form onSubmit={handleLogin} className="login-form">
            <h3>Login Now</h3>
            <input 
                type="email" 
                placeholder="Your Email"
                className="box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Your Password" 
                className="box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p>Forget your password <a href="">click here</a></p>
            <input type="submit" placeholder="Entrar" className="btn"></input>
        </form>
    )
}

export default FormLogin;