import React, { useState, useEffect} from "react";
import ProjectCard from "../components/projectCard";

function HomePage() {
    const [projectData, updateProjectData] = useState([])

    // When we load our HomePage, we render all projects in the
    // projectData array. This is by default empty. However, we
    // have projects in our Heroku Database that we deployed and
    // made accessible last subject with python. We can now get
    // those projects by making a get request and storing the 
    // result in our projectData state.
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then(res => res.json())
            .then(data => updateProjectData(data))
    }, [])

    return (
    <div >
        <p> Home page</p>
        {projectData.map((project, index) => (
            <ProjectCard 
                key={index}
                project={project}
            />
        ))}
    </div>
    )
}

export default HomePage