import { GitHub } from '@mui/icons-material'
import Link from '@mui/material/Link';
import resumeData from '../../data/resume-data.json'


export const ProjectsList = () => {
  const { projects } = resumeData
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li className='projects-list-item' key={project.id}>
            <div className='project-info-container'>
              <div className='project-name-container'>
                <div className='project-title-rectangle'></div>
                <h3 className='project-name'>{project.name}</h3>
                <p className='project-role'>{project.role} </p>
              </div>
              <p>Technologies:{project.technologies}</p>
              <p>{project.responsibilities}</p>
              <div>
                <Link href={project.linkProduction}>Link</Link>
                <a
                  href={project.linkRepository}
                  target="_blank"
                  rel='noopener noreferrer nofollow'
                >
                  <GitHub />
                </a>
              </div>
            </div>
            <div className='project-item-img-container'>
              <img src={project.imgUrl} alt="projectimage" width={'322px'} height={'auto'} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}