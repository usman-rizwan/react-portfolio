import React from 'react';
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wrapper row">
            <div className="main-info col-md-7">
                <h1>Web development and websites promotions</h1>
                    <Typed 
                    className="typed-text"
                    strings={["Web Development" , "Student" , "Gamer"]}
                    typeSpeed={60}
                    backSpeed={80}
                    loop
                    />
            <a href="#" className="btn btn1 btn-danger mt-20">Contact Me</a>
                    <img src="https://soumyajit.tech/static/media/home-main.541f8179.svg" className="col-md-5"  alt="sss" />
            
            </div>
        </div>
    )
}
export default Header ;