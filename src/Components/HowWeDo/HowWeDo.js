import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './HowWeDo.css'
import icon1 from '../../Images/Group (1).png'
import icon2 from '../../Images/Group (2).png'
import icon3 from '../../Images/Group (3).png'
import icon4 from '../../Images/Group (4).png'
import cardimg1 from '../../Images/context.png'
import cardimg2 from '../../Images/probe.png'
import cardimg3 from '../../Images/monitor.png'
import cardimg4 from '../../Images/deployment.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const HowWeDo = () => {
    return (
        <div className='how-we-do'>
            <Container>
                <h1 className='how-we-do-heading'>How We Do</h1>
                <div className=" hr-line mx-auto"></div>
                <p className="how-we-do-text">
                    Everything designed to avoid guess work when it comes to concrete actions that will really change the culture.
                </p>
                <p className="how-we-do-text m-0">Understanding and creating our first novel actions takes about 10 to 12 weeks in which we work on:
                </p>



                <div className="what-we-do-contents  my-5">
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
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"

                    >
                        <SwiperSlide>
                            <div className="what-we-do-item ">
                                <img className='d-block mx-auto' src={icon1} alt="" />
                                <Card className='border-0 p-0'>
                                    <div className='img-content mx-auto'>
                                        <img className='img-fluid d-block mx-auto' src={cardimg1} alt="" />
                                    </div>

                                    <h1 className="what-we-do-card-heading">Context and Design</h1>
                                    <p className="what-we-do-card-text">
                                        Understand the context and language to collect people’s understanding.
                                    </p>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-we-do-item ">
                                <img className='d-block mx-auto' src={icon2} alt="" />
                                <Card className='border-0 p-0'>
                                    <div className='img-content mx-auto'>
                                        <img className='img-fluid d-block mx-auto' src={cardimg2} alt="" />
                                    </div>

                                    <h1 className="what-we-do-card-heading">Probe Designs</h1>
                                    <p className="what-we-do-card-text">
                                        Understand the context and language to collect people’s understanding.
                                    </p>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-we-do-item ">
                                <img className='d-block mx-auto' src={icon3} alt="" />
                                <Card className='border-0 p-0'>
                                    <div className='img-content mx-auto'>
                                        <img className='img-fluid d-block mx-auto' src={cardimg3} alt="" />
                                    </div>

                                    <h1 className="what-we-do-card-heading">Monitor Patterns</h1>
                                    <p className="what-we-do-card-text">
                                        Understand the context and language to collect people’s understanding.
                                    </p>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="what-we-do-item ">
                                <img className='d-block mx-auto' src={icon4} alt="" />
                                <Card className='border-0 p-0'>
                                    <div className='img-content mx-auto'>
                                        <img className='img-fluid d-block mx-auto' src={cardimg4} alt="" />
                                    </div>

                                    <h1 className="what-we-do-card-heading">Deployment</h1>
                                    <p className="what-we-do-card-text">
                                        Understand the context and language to collect people’s understanding.
                                    </p>
                                </Card>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    {/* <div className="what-we-do-item ">
                        <img className='d-block mx-auto' src={icon1} alt="" />
                        <Card className='border-0 p-0'>
                            <div className='img-content mx-auto'>
                                <img className='img-fluid d-block mx-auto' src={cardimg1} alt="" />
                            </div>

                            <h1 className="what-we-do-card-heading">Context and Design</h1>
                            <p className="what-we-do-card-text">
                                Understand the context and language to collect people’s understanding.
                            </p>
                        </Card>
                    </div> */}

                </div>





            </Container>

        </div>
    );
};

export default HowWeDo;