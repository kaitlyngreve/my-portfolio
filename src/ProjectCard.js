

function ProjectCard({ project }) {
    return (
        <div className="project-card-container card">
            <img className="project-img" src={project.image} />
            <a href={project.github} target='_blank'>Visit Github Repo</a>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;