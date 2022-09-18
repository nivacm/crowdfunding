import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className='project-card'>
            <Link to={`/projects/${projectData.id}`}>
                <img 
                alt="project"
                src={projectData.image}
                />
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    )
}
export default ProjectCard;  