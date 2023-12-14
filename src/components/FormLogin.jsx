import React from "react";

const FormLogin = () => {
    return (
        <form action="" className="login-form">
            <h3>Login Now</h3>
            <input type="email" placeholder="Your Email" className="box"></input>
            <input type="password" placeholder="Your Password" className="box"></input>
            <p>Forget your password <a href="">click here</a></p>
            <input type="submit" placeholder="Entrar" className="btn"></input>
        </form>
    )
}

export default FormLogin;