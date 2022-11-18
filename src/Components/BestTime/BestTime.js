import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './BestTime.css'
import bestimg from '../../Images/best-time.png'
import adapting from '../../Images/001-cms.png'
import updating from '../../Images/Group 1000003091.png'
import employee from '../../Images/Group 1000003058.png'
import conflict from '../../Images/Group 1000003059.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

const BestTime = () => {
    return (
        <div className='best-time'>
            <Container>
                <div className="best-time-contents">
                    <div className="best-time-item d-md-flex">
                        <div className="best-time-left col-12 col-md-4 ">
                            <h1 className="best-time-text">The best time to
                                work with us</h1>
                            <div className="hr-line"></div>
                            <div className="p-3 best-time-img-div shadow">
                                <img className='img-fluid d-block mx-auto' src={bestimg} alt="" />
                            </div>
                        </div>
                        <div >
                            <div className="d-none d-md-block"> 
                            <div className=" best-time-left row  row-cols-2 ">
                                <div className='col p-0'>
                                    <div className="best-time-left-item">
                                        <Card className='p-0 border-0'>
                                            <img style={{ height: "60px", width: "60px" }} src={adapting} alt="" />
                                            <h1 className="best-time-card-heading">Adapting to online work</h1>
                                            <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                        </Card>
                                    </div>
                                </div>
                                <div className='col p-0'>
                                    <div className="best-time-left-item">
                                        <Card className='p-0 border-0'>
                                            <img style={{ height: "60px", width: "60px" }} src={updating} alt="" />
                                            <h1 className="best-time-card-heading">Updating Process</h1>
                                            <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                        </Card>
                                    </div>
                                </div>
                                <div className='col p-0'>
                                    <div className="best-time-left-item">
                                        <Card className='p-0 border-0'>
                                            <img style={{ height: "60px", width: "60px" }} src={employee} alt="" />
                                            <h1 className="best-time-card-heading">Employee Retention</h1>
                                            <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                        </Card>
                                    </div>
                                </div>
                                <div className='col p-0'>
                                    <div className="best-time-left-item">
                                        <Card className='p-0 border-0'>
                                            <img style={{ height: "60px", width: "60px" }} src={conflict} alt="" />
                                            <h1 className="best-time-card-heading">Conflict Resolution</h1>
                                            <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                        </Card>
                                    </div>
                                </div>

                            </div></div>

                        </div>

                        <div className='d-md-none'>
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

                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>  <div className="best-time-left-item">
                                    <Card className='p-0 border-0'>
                                        <img className='d-block mx-auto' style={{ height: "60px", width: "60px" }} src={adapting} alt="" />
                                        <h1 className="best-time-card-heading">Adapting to online work</h1>
                                        <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                    </Card>
                                </div></SwiperSlide>
                                <SwiperSlide>  <div className="best-time-left-item">
                                    <Card className='p-0 border-0'>
                                        <img className='d-block mx-auto' style={{ height: "60px", width: "60px" }} src={updating} alt="" />
                                        <h1 className="best-time-card-heading">Updating Process</h1>
                                        <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                    </Card>
                                </div></SwiperSlide>
                                <SwiperSlide>  <div className="best-time-left-item">
                                    <Card className='p-0 border-0'>
                                        <img className='d-block mx-auto' style={{ height: "60px", width: "60px" }} src={employee} alt="" />
                                        <h1 className="best-time-card-heading">Employee Retention</h1>
                                        <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                    </Card>
                                </div></SwiperSlide>
                                <SwiperSlide>  <div className="best-time-left-item">
                                    <Card className='p-0 border-0'>
                                        <img className='d-block mx-auto' style={{ height: "60px", width: "60px" }} src={conflict} alt="" />
                                        <h1 className="best-time-card-heading">Conflict Resolution</h1>
                                        <p className="best-time-card-text">We used this process to listen to 500 employees, spread in 48 countries and in 4 different languages to understand the impact of the focus of the work being taken online.</p>
                                    </Card>
                                </div></SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BestTime;