import * as React from 'react'
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { Education, Experience, Skills } from './index';


export const Resume = () => {
  return (
    <div className='resume-container'>
      <div className='resume-page-title-container'>
        <h2 className='resume-page-title'> <SquareRoundedIcon sx={{ color: "blue", fontSize: '28px' }} /> Resume</h2>
      </div>
      <Experience />
      <Education />
      <Skills />
    </div>

  )
}