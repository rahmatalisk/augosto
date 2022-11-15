import React from 'react';
import bannerImg from '../../Images/img1.png'
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <h1 className="banner-heading">Make sense <br /> Make <span>Action</span></h1>
                        <p className="banner-text d-none d-md-block">Steering culture to <br /> Promote change</p>
                        <p className="banner-text  d-md-none">Steering culture to Promote change</p>
                        <button className='banner-btn d-none d-md-block'>Talk with an expert</button>
                    </div>
                    <div className="col-12 col-md-6 banner-right">
                        <img src={bannerImg} alt="" className="img-fluid" />
                    </div>
                </div>

                <div className="banner-bottom">
                <WhatWeDo></WhatWeDo>
                </div>
            </div>
        </div>
    );
};

export default Banner;



// let sum = 0;
// let a = 0;
// const dara = (n)=>{
//     a = a + 3;
//     if(10 < a){
// return sum;
//     }
//     else{
//         sum = sum + a;
//         return sum + dara(sum);
//     }   
// }
// console.log(dara())