

function ProjectCard({ project }) {
    return (
        <div className="Projects">
            <a href={project.github} target='_blank'>Link to Github</a>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;