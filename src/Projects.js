import ProjectCard from './ProjectCard'

function Projects() {

    const projects = [
        {
            'github': 'https://github.com/kaitlyngreve/phase-5-capstone',
            'image': 'images/recipyapp.jpg',
            'description': 'Recipy App'
        },
        {
            'github': 'https://github.com/murphy-mi/phase-2-project',
            'image': 'images/memorygameapp.jpg',
            'description': 'Memory Game'
        },
        {
            'github': 'https://github.com/kaitlyngreve/Phase-4-Stranger-Project',
            'image': 'images/strangerthingsapp.jpg',
            'description': 'Stranger Things Game'
        }
    ]

    return (
        <div className="project-cards-container">
            {projects.map(project => {
                return <ProjectCard project={project} key={project.github} />
            })}
        </div>
    );
}

export default Projects;