import React from 'react';
import './Projects.css'
import img1 from '../../image/Capture.PNG'
import img2 from '../../image/Capture1.PNG'
import img3 from '../../image/Capture2.PNG'
import img4 from '../../image/Capture3.PNG'
import img5 from '../../image/Capture4.PNG'
import img6 from '../../image/Capture5.PNG'
import img7 from '../../image/Capture6.PNG'
import img8 from '../../image/Capture7.PNG'
import img9 from '../../image/Capture8.PNG'
import img10 from '../../image/Capture9.PNG'
import img11 from '../../image/Capture10.PNG'
import img12 from '../../image/Capture11.PNG'

const Projects = () => {
    return (
        <div className="">
            <h1 id="projects" className="text-6xl">Projects</h1>
            <div className="flex pt-8">
            <div className="flex w-75  items-center p-4">
            <div className="flex w-100">
                <div className="">
                <div><img className="p-2" src={img1} alt="" /></div>
                <div><img className="p-2" src={img2} alt="" /></div>
                </div>
                <div className="">
                <div><img className="p-2" src={img3} alt="" /></div>
                <div><img className="p-2" src={img4} alt="" /></div>
                </div>
            </div>
            <div className=" text-start ps-4 ">
            <h1 className="text-3xl">Tourism site</h1>
                <h3 className="text-2xl"><a href="https://sa-tourism-planner.web.app/">live site</a> || <a href="https://github.com/jhsayem021/Tourism_Demo">client repo</a> || <a href="https://github.com/jhsayem021/Tourism_Demo_server_site">server repo</a></h3>
                <h3 className="text-3xl">Features</h3>
                <h3 className="text-2xl">
                -Guest users can see home, about & contact us pages. <br />
-Only registered account holders can order us they can see other 2
routes namely packages and orders. <br />
-Our user can see the order list and also remove his/her order easily.
                </h3>
            </div>
            </div>
            <div className="flex w-75  items-center p-4">
            <div className="flex w-50">
                <div className="w-50">
                <div><img className="p-2" src={img5} alt="" /></div>
                <div><img className="p-2" src={img6} alt="" /></div>
                </div>
                <div className="w-50">
                <div><img className="p-2" src={img7} alt="" /></div>
                <div><img className="p-2" src={img8} alt="" /></div>
                </div>
            </div>
            <div className="w-50">
                <h1>project 1</h1>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex w-75  items-center p-4 text-3xl ">
            <div className="flex w-50">
                <div className="w-50">
                <div><img className="p-2" src={img9} alt="" /></div>
                <div><img className="p-2" src={img10} alt="" /></div>
                </div>
                <div className="w-50">
                <div><img className="p-2" src={img11} alt="" /></div>
                <div><img className="p-2" src={img12} alt="" /></div>
                </div>
            </div>
            <div className="w-50">
                <h1>project 1</h1>
            </div>
            </div>
            
            </div>
        </div>
    );
};

export default Projects;