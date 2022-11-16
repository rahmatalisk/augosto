import React from 'react';
import { Card } from 'react-bootstrap';
import './OurApproach.css'
import img1 from "../../Images/Group 1000003090.png"
import img2 from "../../Images/Group 1000003046.png"
import img3 from "../../Images/Group.png"

const OurApproach = () => {
    return (
        <div className='our-approach'>
            <div className="container">
                <div className="our-approach-contents d-md-flex align-items-center justify-content-between">
                    <div className="approach-left col-12 col-md-5">
                        <h1 className="our-approach-text">Our Approach</h1>
                        <div className=" hr-line"></div>
                        <p className="text-bold-p">A 3-step process for never getting stuck in which actions to choose for promoting real change in the culture or behavior in your organization.</p>
                        <p className="approach-text">Our process is designed to make decisions based on data that really represent the complexity of your challenge. With a better understanding of your organization, set into creating innovative solutions.</p>
                    </div>
                    <div className="approach-right col-11  mx-auto col-md-6 ms-auto">
                        <Card className='border-0'>
                            <div className='approach-card d-flex  '>
                                <div className='img-div'> <img className='' src={img1} alt="" /></div>
                                <div className='ms-4 ms-md-5'>
                                    <h4 className='card-heading'>Connect Working Group</h4>
                                    <p className="card-text-right">Establish a working context and group to develop the project with the client.</p>
                                </div>
                            </div>
                        </Card>
                        <Card className='border-0'>
                            <div className='approach-card d-flex  '>
                                <div className='img-div'> <img className='' src={img2} alt="" /></div>
                                <div className='ms-4 ms-md-5'>
                                    <h4 className='card-heading'>Collect Design & Collection</h4>
                                    <p className="card-text-right">Design and collect warm data, surface patterns and report.</p>
                                </div>
                            </div>
                        </Card>
                        <Card className='border-0'>
                            <div className='approach-card d-flex  '>
                                <div className='img-div'> <img className='' src={img3} alt="" /></div>
                                <div className='ms-4 ms-md-5'>
                                    <h4 className='card-heading'>Create Solutions  Mapping</h4>
                                    <p className="card-text-right">Host Sessions for collective intrepretation of data and solutions mapping</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurApproach;