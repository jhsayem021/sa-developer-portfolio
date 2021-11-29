import React from 'react';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
// import Contact from '../Contact/Contact';
import Header from './../Header/Header';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Contact></Contact>
            <Projects></Projects>
        </div>
    );
};

export default Home;