import React from 'react';
import logo from '../../Images/logo.svg'
import './Navbar.css'
import menuIcon from '../../Images/menuicon.svg'


const Menu = () => {
    return (
        <div className="header ">
            <div className='container'>
                <div className="navbar  navbar-expand-lg">
                    <div className="navbar-brand">
                        <img className='logo' src={logo} alt="" />
                    </div>

                    <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={menuIcon} alt="" />
                    </div>



                    <div className="navbar-collapse collapse" id='navbarSupportedContent'>
                        <div className="navbar-nav  mx-lg-auto">
                            <li><a className="nav-link " href="#home">Home</a></li>
                            <li><a className="nav-link " href="#home">What we do</a></li>
                            <li><a className="nav-link " href="#home">Our Approach</a></li>
                            <li><a className="nav-link " href="#home">Testimonials</a></li>
                        </div>
                        <div className="nav ">
                            <li><button className="get-started-btn">
                                Get Started</button></li>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;