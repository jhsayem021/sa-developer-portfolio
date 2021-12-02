import React from 'react';
import './Projects.css'
import p1 from '../../image/Capture.PNG'
import 'animate.css';
// import p2 from '../../image/Capture1.PNG'
const Projects = () => {
    
    // const card = {
    //     width:18;
    // }
    return (
        <div>
            <h1 className="text-4xl text-center py-4">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="card m-4 ">
                <img src={p1} className="card-img-top p-4 animation" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-3xl">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <a href="https://github.com/jhsayem021/Tourism_Demo" className="card-link">Client repo</a>
                    <a href="https://github.com/jhsayem021/Tourism_Demo_server_site" className="card-link">server repo</a>
                    <a href="https://sa-tourism-planner.web.app/" className="card-link">View live</a>
                </div>
                </div>
            <div className="card m-4 flex">
                <div><img src={p1} className="card-img-top p-4 animation" alt="..."/></div>
                <div>
                <div className="card-body">
                    <h5 className="card-title text-3xl">Tourism Website</h5>
                    <p className="card-text">its an demo website of tourism planner which using Javascript, React </p>
                </div>
                <div className="card-body">
                    <a href="https://github.com/jhsayem021/Tourism_Demo" className="card-link">Client repo</a>
                    <a href="https://github.com/jhsayem021/Tourism_Demo_server_site" className="card-link">server repo</a>
                    <a href="https://sa-tourism-planner.web.app/" className="card-link">View live</a>
                </div>
                </div>
                </div>
            <div className="card m-4">
                <img src={p1} className="card-img-top p-4 animation" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-3xl">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <a href="https://github.com/jhsayem021/Tourism_Demo" className="card-link">Client repo</a>
                    <a href="https://github.com/jhsayem021/Tourism_Demo_server_site" className="card-link">server repo</a>
                    <a href="https://sa-tourism-planner.web.app/" className="card-link">View live</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;