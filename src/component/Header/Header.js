import React from 'react';
import profile from '../../image/Sayem new pic linkdin.png'
import Navber from './../Navber/Navber';
import 'animate.css';

const Header = () => {
    return (
        <div>
            
            <div className="flex justify-evenly items-center py-8">
                <div>
                
                <h1 className="text-6xl  animate__bounceOut">Hi, I am JH Sayem</h1>
                <h5 className="text-2xl">Front-end Developer</h5>
            </div>
            <div>
                <img src={profile} alt="" className="rounded-2xl " />
            </div>
            </div>
        </div>
    );
};

export default Header;