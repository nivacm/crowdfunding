import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const [users, setUsers] = useState([]);
    const { id } = useParams();

    
    const getUser = (pledge) => {
        const user = user.filter(user => user.id === pledge.supporter)[0]
        return user.username
    }
    useEffect(() => {
        //Send GET request to:
        // https://desolate-meadow-66943.herokuapp.com/projects/2
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then(res => res.json())
        .then(data => setProjectData(data))
    }, [])

    useEffect(() => {
        //send GET request to:
        //https://desolate-meadow-66943.herokuapp.com/projects/2
        fetch(`${process.env.REACT_APP_API_URL}users`)
        .then(res => res.json())
        .then(data => setUsers(data))
	
}, [])

return (
        <div>
            <h1>{projectData.title}</h1>
            <h3>Created At: {projectData.date_created}</h3>
            <h3>Status: {projectData.is_open}</h3>
            <img src={projectData.image} alt={projectData.title}/>
            <ul>
                {projectData.pledges.map((pledge, index) =>(
                    <li key={index}>
                        ${pledge.amount} from {getUser(pledge)}</li>
                ))}
            </ul>
        </div>
    )
    
}

export default ProjectPage
