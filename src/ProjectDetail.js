import { useParams } from 'react-router-dom'


function ProjectDetail({ projects }) {
    const { id } = useParams();

    const projectDetail = projects.filter(project => project.id == id)

    console.log(projectDetail)

    return (
        <div>
            {/* <h1>{projectDetail[0].title}</h1> */}
        </div>
    );
}

export default ProjectDetail;