import React from "react";
import "./style.css"

const TableProducts = () => {
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
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Cadeira</td>
                            <td>Cadeira de escritório</td>
                            <td>Empresa</td>
                            <td>1.00m</td>
                            <td>1.20m</td>
                            <td>15cm</td>
                            <td>90kg</td>
                            <td className="btn-edit"><i class="fa-solid fa-pen-to-square"></i></td>
                            <td className="btn-delete"><i class="fa-solid fa-trash"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableProducts;