import React from "react";
import HeaderAdm from "../../components/HeaderAdm";
import HomeAdm from "../../components/HomeAdm";

const Administrative = () => {
    return (
        <div className="administrative">
            <header>
                <HeaderAdm />
            </header>

            <div className="home-content-adm">
                <HomeAdm />
            </div>
        </div>
    )
}

export default Administrative;