import React, { useState } from "react";
import Inputmask from "react-input-mask";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import TableProvider from "../../components/TableProvider";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const PageProvider = () => {

    const navigate = useNavigate();

    const navigateToEditPage = (company) => {
        navigate(`/fornecedores/update/${company.id}`);
    };

    const [companys, setCompanys] = useState([]);

    const [companyField, setCompanyField] = useState({
        name: "", cnpj: "", road: "", neighborhood: "", number: "", cep: "",
        city: "", state: "", complement: "", email: "", phone: "", cellphone: ""
    });

    const changeCompanysFieldHandler = (e) => {
        setCompanyField({
            ...companyField,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/companys/add", companyField);
            console.log(response);
            toast.success("Dados registrados com sucesso!", {
                theme: "colored",
                style: {
                    fontSize: '1.6rem',
                },
            });
        } catch (err) {
            toast.error("Erro ao enviar solicitação: " + err.response.data.message, {
                theme: "colored",
                style: {
                    fontSize: '1.6rem',
                },
            });
            console.error("Erro ao enviar solicitação: ", err)
            console.error("Erro ao cadastrar o produto: " + err.response.data.message);
            //alert("Erro no servidor: " + err.response.data.message);
        }
    }

    const onDeleteCompany = async (companyId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/companys/delete/${companyId}`);

            const updatedCompanys = companys.filter(company => company.id !== companyId);
            setCompanys(updatedCompanys);

            toast.success("Fornecedor deletado com sucesso!", {
                theme: "colored",
                style: {
                    fontSize: '1.6rem',
                },
            });
        } catch (err) {
            toast.error("Erro ao deletar o fornecedor: " + err.response.data.message, {
                theme: "colored",
                style: {
                    fontSize: '1.6rem',
                },
            });
            console.error("Erro ao enviar solicitação: ", err)
            console.error("Erro ao deletar o fornecedor: " + err.response.data.message);
            //alert("Erro no servidor: " + err.response.data.message);
        }
    };

    return (
        <div className="page-provider">

            <Sidebar />

            <div className="content-provider">
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
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="cnpj">CNPJ*</label>
                                        <Inputmask
                                            mask="99.999.999/9999-99"
                                            placeholder="__.___.___/____-__"
                                            id="cnpj" name="cnpj"
                                            className="input-form"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-2">
                                        <label htmlFor="rua">Rua*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o nome da rua"
                                            id="road"
                                            name="road"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="bairro">Bairro*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o nome do bairro"
                                            id="neighborhood"
                                            name="neighborhood"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="numero">Nº*</label>
                                        <input
                                            type="number"
                                            className="input-form"
                                            placeholder="Digite o número"
                                            id="number"
                                            name="number"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="cep">CEP*</label>
                                        <Inputmask
                                            mask="99999-999"
                                            placeholder="_____-___"
                                            id="cep" name="cep"
                                            className="input-form"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="cidade">Cidade*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite a cidade"
                                            id="city"
                                            name="city"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="estado">Estado*</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o estado"
                                            id="state"
                                            name="state"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="complemento">Complemento</label>
                                        <input
                                            type="text"
                                            className="input-form"
                                            placeholder="Digite o complemento"
                                            id="complement"
                                            name="complement"
                                            onChange={e => changeCompanysFieldHandler(e)}
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
                                            onChange={e => changeCompanysFieldHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="telefone">Telefone</label>
                                        <Inputmask
                                            mask="(99) 9999-9999"
                                            placeholder="(__) ____-____"
                                            id="phone" name="phone"
                                            className="input-form"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                        />
                                    </div>

                                    <div className="column-1">
                                        <label htmlFor="celular">Celular</label>
                                        <Inputmask
                                            mask="(99) 99999-9999"
                                            placeholder="(__) _____-____"
                                            id="cellphone" name="cellphone"
                                            className="input-form"
                                            onChange={e => changeCompanysFieldHandler(e)}
                                        />
                                    </div>

                                    <button className="btn" type="submit" onClick={e => onSubmitChange(e)}>Enviar</button>
                                </div>
                            </form>

                            <div className="content-table">
                                <TableProvider navigateToEditPage={navigateToEditPage} onDeleteCompany={onDeleteCompany} />
                            </div>
                        </article>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default PageProvider;