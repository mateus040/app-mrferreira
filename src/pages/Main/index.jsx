import React from "react";
import './style.css';
import Header from "../../components/Header";
import Home from "../../components/Home";
import Features from "../../components/Features";
import Products from "../../components/Products";
import Categories from "../../components/Categories";
import Brands from "../../components/Brands";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import About from "../../components/About";
import ViewCompanys from "../../components/Companys";

const Main = () => {
    return (

        <div className="app">
            <div className="components">
                <header className="header">
                    <Header />
                </header>

                <section className="home">
                    <Home />
                </section>

                <section className="features">
                    <Features />
                </section>

                <section className="products">
                    <Products />
                </section>

                <section className="categories">
                    <Categories />
                </section>

                <section className="about">
                    <About />
                </section>

                <section className="review">
                    <ViewCompanys />
                </section>

                <section className="contact">
                    <Contact />
                </section>

                <section className="brands">
                    <Brands />
                </section>

                <footer className="footer">
                    <Footer />
                </footer>
            </div>

            <div className="icon-whats anim">
                <a href="https://api.whatsapp.com/send?phone=5514991896619" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>

        </div>

    )
}

export default Main;