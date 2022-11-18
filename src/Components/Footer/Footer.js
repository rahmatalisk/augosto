import React from 'react';
import { Container } from 'react-bootstrap';
import address from '../../Images/address.png'
import logo from '../../Images/logo.svg'
import socialicon from '../../Images/social-media-group.png'
import phone from '../../Images/phone.png'
import email from '../../Images/email.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="address d-flex align-items-center">
                        <img className='mb-2' src={address} alt="" />
                        <h5 className="address-text" style={{marginLeft:"15px"}}>Address:<span>35838 PO Box 6945 <br />
                            London W1A 6US</span> </h5>
                        </div>
                        <div className="address address-2 d-flex align-items-center">
                        
                        <h5 className="address-text" >Address:<span>4283 Express Lane 4081-198 <br /> Sarasota FL 34249</span> </h5>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4">
                        <img className='d-block mx-auto mb-2' src={logo} alt="" />
                        <img className='d-block mx-auto' src={socialicon} alt="" />
                    </div>
                    <div className="col-12 col-md-4  ">
                        <div className="address d-flex align-items-center">
                        <img className='mb-2' src={phone} alt="" />
                        <h5 className="address-text" style={{marginLeft:"15px"}}>Phone:<span> xxx-xxx-xxx</span> </h5>
                        </div>
                        <div className="address  d-flex align-items-center">
                        <img className='mb-2' src={email} alt="" />
                        <h5 className="address-text"
                        style={{marginLeft:"15px"}} >Email:<span> info@augustoc.com</span> </h5>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;