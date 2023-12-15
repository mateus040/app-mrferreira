import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Features from "../components/Features";

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
        </div>

    )
}

export default Main;