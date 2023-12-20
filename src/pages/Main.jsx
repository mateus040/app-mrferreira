import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Features from "../components/Features";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

const Main = () => {
    return (

        <div className="app">
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

            <section className="review">
                <Review />
            </section>

            <section className="about">
                <About />
            </section>

            <section className="contact">
                <Contact />
            </section>

            <footer className="footer">
                <Footer />
            </footer>
        </div>

    )
}

export default Main;