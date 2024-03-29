import resumeData from '../../data/resume-data.json'
import { SquareIcon } from '../Icons'
export const Skills = () => {
  const { techSkills, softSkills, languages } = resumeData

  return (
    <div className="skills-container">
      <div >
        <h2>Tech skills</h2>
        <ul className='skills-list'>
          {techSkills.map((item, index) => (
            <li key={index} >
              <SquareIcon styles={{ color: 'blue', fontSize: "large", marginRight: "5px" }} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Soft skills</h2>
        <ul className='skills-list'>
          {softSkills.map((item, index) => (
            <li key={index}>
              <SquareIcon styles={{ color: 'blue', fontSize: "large", marginRight: "5px" }} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Languages</h2>
        <ul className='skills-list'>
          {languages.map((item, index) => (
            <li key={index}>
              <SquareIcon styles={{ color: 'blue', fontSize: "large", marginRight: "5px" }} />
              <p>{item.name} - {item.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}