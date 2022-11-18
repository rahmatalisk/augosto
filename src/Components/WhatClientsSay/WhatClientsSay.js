import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import './WhatClientsSay.css'
import star from '../../Images/star.png'
import customer from '../../Images/Ellipse.png'
import flag from '../../Images/united-states.png'
import { Pagination } from 'swiper';

const WhatClientsSay = () => {
    return (
        <div>
            <Container>
                <h1 className="what-our-clients-says">What clients say</h1>

                <p className="what-is-clients-say-p">See what our partners say about the work we have done together</p>

                <div className="what-is-clients-says-contents">
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 40,
                        },

                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    
                    >
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-is-clients-says-item">
                                <Card className='border-0'>
                                    <img src={star} alt="" style={{ width: "118px" }} />

                                    <h1 className="mt-2 what-is-clients-say-card-title">With more and more people finding!</h1>

                                    <p className="what-is-clients-says-card-text">“There is only one word I can use to describe my experience with Besnik: partner. In the truest sense of a high performing partnership.”</p>

                                    <div className="customer-detail d-flex justify-content-between align-items-center ">
                                        <div className="customer-detail-left d-flex align-items-center">
                                            <img src={customer} alt="" className="customer-img" />
                                            <div>
                                                <h3 className="m-0 customer-name">Rebecca Fala</h3>
                                                <h4 className="customer-profession m-0">Engineer</h4>
                                            </div>
                                        </div>

                                        <img src={flag} alt="" />

                                    </div>
                                </Card>

                            </div>
                        </SwiperSlide>
                       
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default WhatClientsSay;