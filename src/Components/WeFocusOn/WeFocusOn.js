import React from 'react';
import './WeFocusOn.css'
import focus1 from '../../Images/Group.svg'
import focus2 from '../../Images/Group (1).svg'
import focus3 from '../../Images/employee-fitness.svg'
import cout from '../../Images/Group (2).svg'
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";


const WeFocusOn = () => {
    return (
        <div className='we-focus-on-container '>
            <div className="container we-focus-on">
                <h1 className="we-focus-on-text">We Focus On</h1>
                <div className=" hr-line"></div>

                <div className="we-focus-on-contents ">
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
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"

                    >
                        <SwiperSlide>
                            <div className="we-focus-on-item ">
                                <Card className="border-0 p-2">
                                    <Card.Body>
                                        <img className='mx-auto d-block m-md-0' src={focus1} alt="" />
                                        <Card.Title>Cultural Identity</Card.Title>
                                        <Card.Text>
                                            You want to understand how things really are  in your organization but surveys and interviews do not give trustful results.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="we-focus-on-item ">
                                <Card className="border-0  ">
                                    <Card.Body className='p-0'>
                                        <img className='mx-auto d-block m-md-0' src={focus2} alt="" />
                                        <Card.Title>Adaptation Challenges</Card.Title>
                                        <Card.Text>
                                            Your organization is adapting to internal or external changes and the way things are done need to adapt as well.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="we-focus-on-item ">
                                <Card className="border-0 p-2">
                                    <Card.Body>
                                        <img className='mx-auto d-block m-md-0' src={focus3} alt="" />
                                        <Card.Title>Employee Fitness</Card.Title>
                                        <Card.Text>
                                            Collaborators in the organization are dissatisfied, either accepting other opportunities or struggling with work/life balance.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>



            </div>
            <div className="what-you-think container p-0">
                <Card className="text-center border-0">
                    <Card.Body className='p-0'>
                        <img src={cout} alt="" />
                        <h1 className='m-0'>Not what you think, What you experience.</h1>
                        <p className='m-0'>When you ask people to tell stories, and then ask them about those stories, you are getting interpretations rather than opinions.</p>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default WeFocusOn;