import React from "react";
import "../styles/table.css";

const TableProvider = () => {
    return (
        <div className="table-provider">
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CNPJ</th>
                            <th>Rua</th>
                            <th>Bairro</th>
                            <th>Número</th>
                            <th>CEP</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Celular</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Produto 1</td>
                            <td>12.345.678/0001-00</td>
                            <td>Rua Nicola Orlandi</td>
                            <td>Jd. Novo Horizonte</td>
                            <td>246</td>
                            <td>17209-838</td>
                            <td>Jaú</td>
                            <td>SP</td>
                            <td>mateusgabrielmoreno264@gmail.com</td>
                            <td>(14) 3624-3348</td>
                            <td>(14) 99189-6619</td>
                            <td className="btn-edit"><i class="fa-solid fa-pen-to-square"></i></td>
                            <td className="btn-delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Produto 1</td>
                            <td>12.345.678/0001-00</td>
                            <td>Rua Nicola Orlandi</td>
                            <td>Jd. Novo Horizonte</td>
                            <td>246</td>
                            <td>17209-838</td>
                            <td>Jaú</td>
                            <td>SP</td>
                            <td>mateusgabrielmoreno264@gmail.com</td>
                            <td>(14) 3624-3348</td>
                            <td>(14) 99189-6619</td>
                            <td className="btn-edit"><i class="fa-solid fa-pen-to-square"></i></td>
                            <td className="btn-delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Produto 1</td>
                            <td>12.345.678/0001-00</td>
                            <td>Rua Nicola Orlandi</td>
                            <td>Jd. Novo Horizonte</td>
                            <td>246</td>
                            <td>17209-838</td>
                            <td>Jaú</td>
                            <td>SP</td>
                            <td>mateusgabrielmoreno264@gmail.com</td>
                            <td>(14) 3624-3348</td>
                            <td>(14) 99189-6619</td>
                            <td className="btn-edit"><i class="fa-solid fa-pen-to-square"></i></td>
                            <td className="btn-delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Produto 1</td>
                            <td>12.345.678/0001-00</td>
                            <td>Rua Nicola Orlandi</td>
                            <td>Jd. Novo Horizonte</td>
                            <td>246</td>
                            <td>17209-838</td>
                            <td>Jaú</td>
                            <td>SP</td>
                            <td>mateusgabrielmoreno264@gmail.com</td>
                            <td>(14) 3624-3348</td>
                            <td>(14) 99189-6619</td>
                            <td className="btn-edit"><i class="fa-solid fa-pen-to-square"></i></td>
                            <td className="btn-delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableProvider;