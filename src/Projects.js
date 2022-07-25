import ProjectCard from './ProjectCard'

function Projects({ projects }) {
    return (
        <div className="Projects">
            {projects.map(project => {
                return <ProjectCard project={project} key={project.github} />
            })}
        </div>
    );
}

export default Projects;