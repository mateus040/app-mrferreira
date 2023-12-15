import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Features from "../components/Features";
import Products from "../components/Products";

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
        </div>

    )
}

export default Main;