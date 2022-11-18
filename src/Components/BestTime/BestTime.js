import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './BestTime.css'
import bestimg from '../../Images/best-time.png'
import adapting from '../../Images/001-cms.png'

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
                        <div className=" best-time-left ">
                            <div className="best-time-left-item">
                                <Card className='p-0 border-0'>
                                    <img style={{height:"60px",width:"60px"}} src={adapting} alt="" />
                                </Card>
                            </div>


                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BestTime;