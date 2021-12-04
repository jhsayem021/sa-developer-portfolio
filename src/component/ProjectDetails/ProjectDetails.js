import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import './ProjectDetails.css'
const ProjectDetails = () => {

    // @ts-ignore
    const  {projectId}  = useParams();
    console.log(projectId);
    const [projectd,setProjectd] = useState({})
    let history = useHistory();
    useEffect(()=>{
        fetch(`https://guarded-hollows-82527.herokuapp.com/projects/${projectId}`)
        .then(res=>res.json())
        .then(data=>setProjectd(data))
    },[])    

    const handleClick = ()=>{
        history.push(`/projects`);
    }

    // @ts-ignore
    const {image1, image2, image3, image4,title,features1,features2,features3,link1,link2,link3} = projectd;
    return (
        <div className="flex justify-center py-4">
                <div className="card m-4 bg-gray-400 w-50 ">
                <h1>hello details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:pl-5 ">
                <div><img src={image1} className="card-img-top p-1 animation" alt="..."/></div>
                <div><img src={image2} className="card-img-top p-1 animation" alt="..."/></div>
                <div><img src={image3} className="card-img-top p-1 animation" alt="..."/></div>
                <div><img src={image4} className="card-img-top p-1 animation" alt="..."/></div>
                </div>
                
                <div className="card-body">
                    <h5 className="card-title text-3xl">{title}</h5>
                    <h3>Features:</h3>
                    <p className="card-text ">{features1}</p>
                    <p className="card-text ">{features2}</p>
                    <p className="card-text ">{features3}</p>
                
                </div>
                <div className="card-body flex justify-between align-items">
                    <button onClick={handleClick} className="btn btn-primary pb-4" > View Projects</button>
                    <div className="source" > <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium mr-2" href={link1}>Live view</a>
                    <a className="bg-gray-900 text-white mr-2 px-3 py-2 rounded-md text-sm font-medium" href={link2}>Client repo</a>
                    <a className="bg-gray-900 text-white mr-2 px-3 py-2 rounded-md text-sm font-medium" href={link3}>Server repo</a> </div>
                </div>
                </div>
                </div>
    );
};

export default ProjectDetails;