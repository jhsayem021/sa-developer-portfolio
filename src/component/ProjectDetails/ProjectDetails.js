import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import './ProjectDetails.css'
const ProjectDetails = () => {

    const  {projectId}  = useParams();
    console.log(projectId);
    const [projectd,setProjectd] = useState({})
    let history = useHistory();
    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${projectId}`)
        .then(res=>res.json())
        .then(data=>setProjectd(data))
    },[])    

    const handleClick = ()=>{
        history.push(`/projects`);
    }

    const {image1, image2, image3, image4,title,features} = projectd;
    return (
        <div className="flex justify-center py-4">
                <div className="card m-4 bg-gray-400 w-75 ">
                <h1>hello details</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 ">
                <div><img src={image1} className="card-img-top p-4 animation" alt="..."/></div>
                <div><img src={image2} className="card-img-top p-4 animation" alt="..."/></div>
                <div><img src={image3} className="card-img-top p-4 animation" alt="..."/></div>
                <div><img src={image4} className="card-img-top p-4 animation" alt="..."/></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-3xl">{title}</h5>
                    <p className="card-text">{features}</p>
                </div>
                <div className="card-body">
                    <button onClick={handleClick} > view Projects</button>
                </div>
                </div>
                </div>
    );
};

export default ProjectDetails;