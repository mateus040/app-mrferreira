import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";

const Main = () => {
    return (

        <div className="app">
            <header className="header-content">
                <Header />
            </header>

            <section className="home">
                <Home />
            </section>
        </div>

    )
}

export default Main;