import React, { useEffect, useState } from "react";
import "./style.css"
import axios from "axios";

const TableProducts = () => {

    const [products, setProducts] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsResponse = await axios.get("http://127.0.0.1:8000/api/products");
                setProducts(productsResponse.data.results);

                const companiesResponse = await axios.get("http://127.0.0.1:8000/api/companys");
                setCompanies(companiesResponse.data.results);
            } catch (err) {
                console.error("Erro ao buscar produtos: ", err);
                alert("Erro no servidor: " + err.response.data.response);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="table-products">
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descição</th>
                            <th>Empresa</th>
                            <th>Comprimento</th>
                            <th>Altura</th>
                            <th>Profundidade</th>
                            <th>Peso Sup.</th>
                            <th>Foto</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{companies.find((company) => company.id === product.id_company)?.name}</td>
                                <td>{product.length}m</td>
                                <td>{product.height}m</td>
                                <td>{product.depth}cm</td>
                                <td>{product.weight}kg</td>
                                <td>
                                    {product.photo && (
                                        <img
                                            src={`http://127.0.0.1:8000/storage/${product.photo}`}
                                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                                        />
                                    )}
                                </td>
                                <td className="btn-edit"><i class="fa-solid fa-pen-to-square"></i></td>
                                <td className="btn-delete"><i class="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableProducts;