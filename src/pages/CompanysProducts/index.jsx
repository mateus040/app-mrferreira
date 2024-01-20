import React, { useEffect, useState } from 'react'
import "./style.css";
import axios from 'axios';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';

export default function CompanysProducts() {

  const { companyId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/companys/${companyId}/products`);
        console.log(response.data);
        setProducts(response.data.results);
      } catch (err) {
        console.error("Erro ao buscar produtos: ", err);
        alert("Erro no servidor: " + err.response.data.message);
      }
    };

    fecthProducts();
  }, [companyId]);

  return (
    <div className='companys-products'>
      <header className="header">
        <Header />
      </header>

      <section className="products-container">
        {/*<div className="heading">the <span>empresa1</span></div>*/}

        <div className="box-container">
          {products.map((product) => (
            <div className="box" key={product.id}>
              {product.photo && (
                <img
                  src={`http://127.0.0.1:8000/storage/${product.photo}`}
                />
              )}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href="" className="btn">detalhes</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
