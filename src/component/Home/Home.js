import React from 'react';
import './Home.css'
import profile from '../../image/Sayem new pic linkdin.png';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <div className="lg:flex  justify-evenly items-center py-8">
                <div className="sm:p-8 w-50">
                
                <h1 className="text-6xl  animate__bounceOut pb-2">Hi, I am JH Sayem</h1>
                <h5 className="text-3xl pb-2 text-blue-700">Front-end Developer</h5>
                <p className="pb-2">As a front-end web developer, I have aquired experience work with HTML, CSS(plain css, Bootstrap, tailwind), Javascript, React.js. On top of that, my web development skills allowed me to build up my web-programming abilities.</p>
            </div>
            <div className="sm:p-8">
                <img src={profile} alt="" className="rounded-2xl " />
                <div className="lg:flex lg:justify-center sm:px-8 py-4 downlink"><a className=" px-2 py-1 rounded ms-2" href="https://drive.google.com/file/d/1vCqjx7R4lv5pvnXhwPYEej9MOigb73R9/view?usp=sharing" download target="_blank" rel="noopener noreferrer">Download resume</a></div>
            </div>
            </div>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;