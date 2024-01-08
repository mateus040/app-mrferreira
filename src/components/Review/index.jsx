import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cadeira from "../../assets/cadeira3.png"

const Review = () => {
    return (
        <div className="review" id="review">
            <h1 className="heading">customer's <span>review</span></h1>

            <Swiper
                className="review-slider"
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
                    <div className="review-slider box">
                        <img src={cadeira}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure omnis maiores molestiae quaerat ad cumque! Assumenda eius doloremque fuga.</p>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="review-slider box">
                        <img src={cadeira}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure omnis maiores molestiae quaerat ad cumque! Assumenda eius doloremque fuga.</p>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="review-slider box">
                        <img src={cadeira}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure omnis maiores molestiae quaerat ad cumque! Assumenda eius doloremque fuga.</p>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="review-slider box">
                        <img src={cadeira}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure omnis maiores molestiae quaerat ad cumque! Assumenda eius doloremque fuga.</p>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Review;