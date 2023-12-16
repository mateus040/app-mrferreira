import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Features from "../components/Features";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Review from "../components/Review";
import Blogs from "../components/Blogs";

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

            <section className="blogs">
                <Blogs />
            </section>
        </div>

    )
}

export default Main;