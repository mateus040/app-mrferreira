import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import TableProducts from "../../components/TableProducts";

const Products = () => {
    return (
        <div className="products">
            <Sidebar />

            <div className="content-products">
            <main>
                    <section className="content">
                        <div>
                            <div className="content-header">
                                <h1 className="title">Produtos</h1>
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
                                            placeholder="Digite o nome do produto"
                                            id="name" name="name"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="empresa">Empresa*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Selecione a empresa"
                                            id="empresa" name="empresa"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="comprimento">Comprimento*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite o comprimento"
                                            id="comprimento" name="comprimento"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="altura">Altura*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite a altura"
                                            id="altura" name="altura"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="profundidade">Profundidade*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite a profundidade"
                                            id="profundidade" name="profundidade"
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="peso">Peso Sup.*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite o peso"
                                            id="peso" name="peso"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="column-4">
                                        <label htmlFor="descricao">Descrição*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite a descrição"
                                            id="descricao" name="descricao"
                                            required
                                        />
                                    </div>

                                    <button className="btn" type="submit">Enviar</button>
                                </div>
                            </form>

                            <TableProducts />
                        </article>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Products;