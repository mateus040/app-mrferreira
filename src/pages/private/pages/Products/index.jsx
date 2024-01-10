import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import TableProducts from "../../components/TableProducts";
import axios from "axios";

const Products = () => {

    const [productsField, setProductsField] = useState({
        name: "", description: "", length: "", height: "", depth: "", weight: "", photo: "", id_company: ""
    });

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/companys");
                setCompanies(response.data.results);
            } catch (err) {
                console.error("Erro ao obter empresas: ", err);
            }
        };

        fetchCompanies();
    }, []);

    const changeProductsFieldHandler = (e) => {
        setProductsField({
            ...productsField,
            [e.target.name]: e.target.value
        });
    }

    const handlePhotoChange = (e) => {
        setProductsField({
            ...productsField,
            photo: e.target.files[0], // Armazenando o a foto
        });
    };

    const onSubmitChange = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", productsField.name);
            formData.append("description", productsField.description);
            formData.append("length", productsField.length);
            formData.append("height", productsField.height);
            formData.append("depth", productsField.depth);
            formData.append("weight", productsField.weight);
            formData.append("photo", productsField.photo);
            formData.append("id_company", productsField.id_company);

            const response = await axios.post("http://127.0.0.1:8000/api/products/add", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Cabeçalho para enviar arquivos
                    },
                }
            );
            console.log(response);
            alert("Dados registrados com sucesso!");
        } catch (err) {
            console.error("Erro ao enviar solicitação: ", err);
            alert("Erro no servidor: " + err.response.data.message);
        }
    };

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
                                            onChange={e => changeProductsFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="empresa">Empresa*</label>
                                        <select
                                            className="input-form"
                                            id="id_company" name="id_company"
                                            onChange={(e) => changeProductsFieldHandler(e)}
                                            required
                                        >
                                            <option value="">Selecione a empresa</option>
                                            {companies.map((company) => (
                                                <option key={company.id} value={company.id}>
                                                    {company.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="comprimento">Comprimento*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite o comprimento"
                                            id="length" name="length"
                                            onChange={e => changeProductsFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="altura">Altura*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite a altura"
                                            id="height" name="height"
                                            onChange={e => changeProductsFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="profundidade">Profundidade*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite a profundidade"
                                            id="depth" name="depth"
                                            onChange={e => changeProductsFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="peso">Peso Sup.*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite o peso"
                                            id="weight" name="weight"
                                            onChange={e => changeProductsFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-3">
                                        <label htmlFor="descricao">Descrição*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite a descrição"
                                            id="description" name="description"
                                            onChange={e => changeProductsFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="photo">Foto*</label>
                                        <input
                                            type="file"
                                            className="input-form"
                                            id="photo" name="photo"
                                            accept="image/*"
                                            onChange={(e) => handlePhotoChange(e)}
                                            required
                                        />
                                    </div>

                                    <button className="btn" type="submit" onClick={e => onSubmitChange(e)}>Enviar</button>
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