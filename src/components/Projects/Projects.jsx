import { SquareIcon } from "../Icons"
import { ProjectsList } from "./ProjectsList"

export const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title-container">
        <SquareIcon styles={{ color: 'blue', fontSize: '28px' }} />
        <h2 className="projects-title">Projects</h2>
      </div>
      <ProjectsList />
    </div>
  )
}