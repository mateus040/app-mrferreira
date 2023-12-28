import React from "react";
import "../private/styles/provider.css";
import HeaderAdm from "./components/HeaderAdm";

const PageProvider = () => {
    return (
        <div className="page-provider">

            <HeaderAdm />

            <div className="content-provider">
                <h1 className="heading"><span>fornecedores</span></h1>

                <div className="form-container">
                    <form className="form">
                        <div className="form-content">
                            <div className="form-group">
                                <label for="name">Nome:</label>
                                <input type="text" id="name" name="name" className="input-name" required></input>
                            </div>

                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" className="input-email" required></input>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>

                        <div className="form-group">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PageProvider;