import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
    return (
        <div>
            <div className="project-card-container card">
                <img className="project-img" src={project.image} />
                <p>{project.title}</p>
                <a href={project.github} target='_blank'>Visit Github Repo</a>
            </div>
        </div>
    );
}

export default ProjectCard;