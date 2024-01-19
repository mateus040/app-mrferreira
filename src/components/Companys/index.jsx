import React, { useEffect, useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cadeira from "../../assets/cadeira3.png";
import axios from "axios";

const ViewCompanys = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanys = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/companys');
                setCompanies(response.data.results);
            } catch (err) {
                console.error("Erro ao buscar empresas: ", err);
                alert("Erro no servidor: " + err.response.data.message);
            }
        };

        fetchCompanys();
    }, []);

    return (
        <div className="company" id="company">
            <h1 className="heading">our <span>companys</span></h1>

            <Swiper
                className="company-slider"
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 7500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1020: { slidesPerView: 3 },
                }}
                initialSlide={0}
            >

                {companies.map((company, index) => (
                    <SwiperSlide key={index}>
                        <div className="company-slider box">
                            <img src={company.logo}></img>
                            <p>{company.name}</p>
                            <button className="btn">Acessar</button>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default ViewCompanys;