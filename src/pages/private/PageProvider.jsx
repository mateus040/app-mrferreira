import React from "react";
import Inputmask from "react-input-mask";
import "../private/styles/provider.css";
import HeaderAdm from "./components/HeaderAdm";

const PageProvider = () => {

    return (
        <div className="page-provider">

            <HeaderAdm />

            <div className="content-provider">
                {/*<h1 className="heading"><span>empresas</span></h1>*/}

                <main>
                    <section className="content">
                        <div>
                            <div className="content-header">
                                <h1 className="title">Empresas</h1>
                                <ul className="breadcrumbs">
                                    <li>
                                        <a href="">Novo</a>
                                    </li>
                                    <li className="divider">/</li>
                                    <li>
                                        <a href="#" className="active">
                                            Cadastrados
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <article className="content-article">
                            <form>
                                <div className="content-form">
                                    <div className="column-3">
                                        <label htmlFor="name">Nome*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o nome da empresa"
                                            id="name"
                                            name="name"
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="cnpj">CNPJ*</label>
                                        <Inputmask
                                            mask="99.999.999/9999-99"
                                            placeholder="__.___.___/____-__"
                                            id="cnpj" name="cnpj"
                                            className="input-form"
                                            required
                                        />
                                    </div>

                                    <div className="column-2">
                                        <label htmlFor="rua">Rua*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o nome da rua"
                                            id="rua"
                                            name="rua"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="bairro">Bairro*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o nome do bairro"
                                            id="bairro"
                                            name="bairro"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="numero">Nº*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite o número"
                                            id="numero"
                                            name="numero"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="cep">CEP*</label>
                                        <Inputmask
                                            mask="999.999.999-99"
                                            placeholder="___.___.___-__"
                                            id="cep" name="cep"
                                            className="input-form"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="cidade">Cidade*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o nome da cidade"
                                            id="cidade"
                                            name="cidade"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="estado">Estado*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o estado"
                                            id="estado"
                                            name="estado"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="complemento">Complemento</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o complemento"
                                            id="complemento"
                                            name="complemento"
                                            required
                                        />
                                    </div>

                                    <div className="column-2">
                                        <label htmlFor="email">Email*</label>
                                        <input
                                            type="email"
                                            className="input-form"
                                            placeholder="Digite o email"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="telefone">Telefone</label>
                                        <Inputmask
                                            mask="(99) 9999-9999"
                                            placeholder="(__) ____-____"
                                            id="telefone" name="telefone"
                                            className="input-form"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="celular">Celular</label>
                                        <Inputmask
                                            mask="(99) 99999-9999"
                                            placeholder="(__) _____-____"
                                            id="celular" name="celular"
                                            className="input-form"
                                            required
                                        />
                                    </div>
                                    
                                    <button className="btn">Enviar</button>
                                </div>
                            </form>
                        </article>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default PageProvider;