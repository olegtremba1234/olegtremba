import resumeData from '../../data/resume-data.json'

export const Education = () => {
  const { education } = resumeData;

  return (
    <div>
      <div>
        <h2>Education</h2>
      </div>
      <ul className='experience-list'>
        {education.map((item) => (
          <li key={item.id} className="experience-list-item">
            <div>
              <ul className='job-list'>
                <li className='job-list-item'>
                  <h3 className='job-list-item-years'>
                    {item.startDate} - {item.endDate}
                  </h3>
                </li>
                <li className='job-list-item'>
                  <p className='job-list-item-position'>
                    {item.institution}
                  </p>
                </li>
                <li className='job-list-item'>
                  <p className='job-list-item-company-name'>
                    {item.degree}
                  </p>
                </li>
                <li className='job-list-item'>
                  <p className='job-list-item-company-location'>
                    {item.location}
                  </p>
                </li>
              </ul>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  )
}