import ProjectCard from './ProjectCard'

function Projects() {

    const projects = [
        {
            'id': 1,
            'title': 'Recipy',
            'github': 'https://github.com/kaitlyngreve/phase-5-capstone',
            'image': 'images/recipyapp.jpg',
            'description': 'Recipy App'
        },
        {
            'id': 2,
            'title': 'Memory Game',
            'github': 'https://github.com/murphy-mi/phase-2-project',
            'image': 'images/memorygameapp.jpg',
            'description': 'A card matching game where you use your memory to find all the matching sets.'
        },
        {
            'id': 3,
            'title': 'Peculiar Entities',
            'github': 'https://github.com/kaitlyngreve/Phase-4-Stranger-Project',
            'image': 'images/strangerthingsapp.jpg',
            'description': 'A game where you build a team with Stranger Things characters to see if you defeated the Demogorgen.'
        }
    ]

    return (
        <div className='section-contained'>
            <h1>Projects:</h1>
            <div className="project-cards-container">
                {projects.map(project => {
                    return <ProjectCard project={project} key={project.github} />
                })}
            </div>
        </div>
    );
}

export default Projects;