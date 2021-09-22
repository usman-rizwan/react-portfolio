import React from 'react';
import Logo from '../assests/image1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-lg  navbar-dark  navi">
            <div className="container">
              <img src={Logo} alt="Logo...." className="logo" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact us</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar ;