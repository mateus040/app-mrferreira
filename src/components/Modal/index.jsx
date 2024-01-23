import React from "react";
import "./style.css";

export default function Modal({ product, onClose }) {
    if (!product) return null;

    return (
        <div className="modal">
            <div className="product-modal">
                <div className="modal-content">
                    <button className="close-btn" onClick={onClose}>Fechar</button>
                    <div className="product-details">
                        <div className="product-image">
                            <img src={`http://127.0.0.1:8000/storage/${product.photo}`} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>

                            <h2>Espeficicações:</h2>
                            <p>Comprimento: <span>{product.weight}</span></p>
                            <p>Altura: <span>{product.height}</span></p>
                            <p>Profundidade: <span>{product.depth}</span></p>
                            <p>Peso: <span>{product.weight}</span></p>

                            <div className="contact">
                                <h2>Tem interesse no produto?</h2>
                                <a href="https://api.whatsapp.com/send?phone=5514991896619" target="_blank" className="link-whatsapp">
                                    <i class="fa-brands fa-whatsapp icon-whatsapp"></i>
                                    Entre em contato!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};