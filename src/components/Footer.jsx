import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="box-container">
                <div className="box">
                    <h3>groco <i className="fas fa-shopping-basket"></i></h3>
                    <p>Lorem ipsum dolor sit amet, adipiscing elit. Labore, aspernatur!</p>
                    <div className="share">
                        <a href="" className="fab fa-facebook-f"></a>
                        <a href="" className="fab fa-twitter"></a>
                        <a href="" className="fab fa-instagram"></a>
                        <a href="" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="" className="links"><i className="fas fa-phone"></i> +123-456-7890</a>
                    <a href="" className="links"><i className="fas fa-phone"></i> +111-222-3333</a>
                    <a href="" className="links"><i className="fas fa-envelope"></i> shaikhanas@gmail.com</a>
                    <a href="" className="links"><i className="fas fa-map-marker-alt"></i> Jaú, SP</a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="" className="links"><i className="fas fa-arrow-right"></i> Home</a>
                    <a href="" className="links"><i className="fas fa-arrow-right"></i> Features</a>
                    <a href="" className="links"><i className="fas fa-arrow-right"></i> Products</a>
                    <a href="" className="links"><i className="fas fa-arrow-right"></i> Categories</a>
                    <a href="" className="links"><i className="fas fa-arrow-right"></i> Review</a>
                    <a href="" className="links"><i className="fas fa-arrow-right"></i> Blogs</a>
                </div>

                <div className="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest updates</p>
                    <input type="email" placeholder="Your Email" className="email" />
                    <input type="submit" value="subscribe" className="btn" />
                </div>
            </div>

            <div className="credit"> by <span> &copy;MR Ferreira Representações </span> | all rights reserved </div>
        </div>
    )
}

export default Footer;