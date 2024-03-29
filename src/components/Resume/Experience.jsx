import Button from '@mui/material/Button';
import resumeData from '../../data/resume-data.json'

export const Experience = () => {
  const { workExperience } = resumeData

  return (
    <div className="experience-container">
      <div className="experience-title-container">
        <h2>Experience</h2>
        <Button href='https://drive.google.com/file/d/1JzIrYjGx_jrpa5RhVS4GYd8ZAcguHqol/view?usp=sharing' variant="outlined" sx={{ border: '1px solid tarnsparent', borderRadius: '50px', backgroundColor: 'blue', color: 'white', '&:hover': { border: '1px solid blue', color: 'black', backgroundColor: 'transparent' } }} target="_blank" rel='noopener noreferrer nofollow'>Download CV</Button>
      </div>
      <ul className='experience-list'>
        {workExperience.map((item) => (
          <li className="experience-list-item" key={item.id}>
            <div>
              <ul className='job-list'>
                <li className='job-list-item'>
                  <h3 className='job-list-item-years'>{item.startDate} - {item.endDate}</h3>
                </li>
                <li className='job-list-item'>
                  <p className='job-list-item-position'>{item.position}</p>
                </li>
                <li className='job-list-item'>
                  <p className='job-list-item-company-name'>{item.company}</p>
                </li>
                <li className='job-list-item'>
                  <p className='job-list-item-company-location'>{item.location}</p>
                </li>
              </ul>
            </div>

            <div className='experience-job-results'>
              {item.responsibilities.map((responsibility, index) => (
                <p key={index}>{responsibility}</p>
              ))}
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}