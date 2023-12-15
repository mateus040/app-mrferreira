import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Features from "../components/Features";
import Products from "../components/Products";
import Categories from "../components/Categories";

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
        </div>

    )
}

export default Main;