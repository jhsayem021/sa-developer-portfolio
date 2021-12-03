import React from 'react';
import { useHistory } from 'react-router-dom';

const Project = (props) => {
    const {id,image1,title,description} = props.project;
    
    let history = useHistory();

    const handleClick = ()=>{
        history.push(`/project/${id}`);
    }

    return (
        <div className="card m-4 ">
                <img src={image1} className="card-img-top p-4 " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-3xl">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-body">
                    <button className="btn btn-primary pb-4"onClick={handleClick} >View details</button>
                </div>
                </div>
    );
};

export default Project;