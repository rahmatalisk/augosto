import React from 'react';
import frame from '../../Images/Frame.png'
import './WhatWeDo.css'
import handshake from '../../Images/Group 32.svg'

const WhatWeDo = () => {
    return (
        <div className='what-we-do'>
            <div className="d-flex justify-content-center align-items-center what-we-do-contents">
                <div className="what-we-do-left col-md-6 col-12 order-last order-md-first">
                    <img className='img-fluid' src={frame} alt="" />
                </div>
                <div className=" what-we-do-right ">
                    <h2 className='what-we-do-heading m-0'>What we do</h2>
                    <div className=" hr-line">

                    </div>
                    <p className='what-we-do-text m-0'>We look into cultural and behavioral challenges to provide tools for new ideas and approaches, promoting concrete change in organisations.</p>
                    <div className='d-flex justify-content-center d-md-none'>
                    <button className='talk-with-an-expert-btn  '>Talk with an expert</button>
                    </div>
                    <div className='d-flex justify-content-center d-md-block d-none'>
                        <img src={handshake} alt="" className='ms-5' />
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;