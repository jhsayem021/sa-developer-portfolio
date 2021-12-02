import React from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';
const Navber = () => {
    return (
        <div className="navber">
            <ul className="flex navlink">
                <li> <Link className="nav  px-2 py-1 rounded ms-2" to="/home">Home</Link> </li>
                <li> <Link className="nav  px-2 py-1 rounded ms-2" to="/projects">Projects</Link> </li>
                <li> <Link className="nav  px-2 py-1 rounded ms-2" to="/about">About me</Link> </li>
                <li> <Link className="nav  px-2 py-1 rounded ms-2" to="/contacts">Contact me</Link> </li>
            </ul>
        </div>
    );
};

export default Navber;