import React, { useEffect, useState } from 'react';
import './Projects.css'
import 'animate.css';
import Project from '../Project/Project';
// import p2 from '../../image/Capture1.PNG'
const Projects = () => {

    const [projects,setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
        
    return (
        <div>
            <h1 className="text-4xl text-center py-4">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
            {
                projects.map(project=><Project
                key={project.id}
                project={project}
                ></Project>)
            }
            </div>
        </div>
    );
};

export default Projects;