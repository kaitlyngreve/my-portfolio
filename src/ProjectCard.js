

function ProjectCard({ project }) {
    return (
        <div className="project-card-container card">
            <img className="project-img" src={project.image} />
            <a href={project.github} target='_blank'>Link to Github</a>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;