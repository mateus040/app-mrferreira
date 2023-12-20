import React from "react";
import "../styles/contact.css";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1 className="heading">our <span>contact</span></h1>
            <div className="content-container">
                <div className="box-container">
                    <div className="box">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="text">
                            <h3>address</h3>
                            <p>Jaú - São Paulo</p>
                            <p>17209838</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="text">
                            <h3>phone</h3>
                            <p>+123 345 6789</p>
                            <p>+111 222 333</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h3>email</h3>
                            <p>mr.ferreira@mrferreira.com</p>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <div className="flex">
                        <input type="text" name="name" maxLength="30" placeholder="Your Name" className="input" />
                        <input type="number" name="number" maxLength="10" placeholder="Your Number" className="input" />
                    </div>
                    <input type="email" name="email" maxLength="10" placeholder="Your Email" className="input" />
                    <textarea name="message" className="input" cols="30" maxLength="1000" rows="10"></textarea>
                    <input type="submit" value="send message" className="btn" />
                </div>
            </div>
        </div>
    )
}

export default Contact;