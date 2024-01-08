import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css";
import cadeira1 from "../../assets/cadeira1.png";

const Products = () => {

    return (
        <div className="products" id="products">
            <h1 className="heading">our <span>products</span></h1>

            <Swiper
                className="product-slider"
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
                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 1</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 2</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 3</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 4</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 5</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 6</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 7</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-slider box">
                        <img src={cadeira1} alt="Fresh Chair" />
                        <h3>fresh chair 8</h3>
                        <div className="price">$50.00/- - 69.00/- </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="" className="btn">add to cart</a>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Products;
