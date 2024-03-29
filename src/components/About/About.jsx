import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Facebook, Telegram, LinkedIn, GitHub } from '@mui/icons-material';
import Button from '@mui/material/Button';

export const About = () => {
  return (
    <div className='about-wrapper'>
      <div className='info-container'>  
        <Avatar
        alt="Oleg Tremba"
        src="/img/my-img-1.jpg"
        sx={{ width: 200, height: 200 }}
        className='about-image'
      />
        <h2 className='about-title'>OLEG <br /> TREMBA</h2>
        <div className='about-ractangle'></div>
        <p className='position-title'>Fullstack Developer</p>
        <div className='about-socials-wrapper'>
          <ul className='about-socials-list'>
            <li><a href="https://www.facebook.com/profile.php?id=100001376784549" target="_blank" rel='noopener noreferrer nofollow'><Facebook /></a> </li>
            <li><a href="https://t.me/olegtremba" target="_blank" rel='noopener noreferrer nofollow'><Telegram /></a> </li>
            <li><a href="https://www.linkedin.com/in/oleg-tremba/" target="_blank" rel='noopener noreferrer nofollow'><LinkedIn /></a></li>
            <li><a href="https://github.com/olegtremba1234" target="_blank" rel='noopener noreferrer nofollow'><GitHub /></a></li>
          </ul>
        </div>
      </div>

      <div className='about-info-wrapper'>
        <p style={{fontSize:"100px", fontWeight:"700", marginTop:'20px'}}>Hello</p>
        <p style={{fontSize:'25px', marginTop:'20px'}}>Here's who I am & what I do</p>
        <div className='about-button-container'>
          <Button href='/resume' variant="outlined" sx={{width:'130px', border:'1px solid tarnsparent', borderRadius:'50px', backgroundColor:'blue', color:'white', '&:hover':{border:'1px solid blue',color:'black', backgroundColor:'transparent'} }}>Resume</Button>
          <Button href='/projects' variant="outlined" sx={{width:'130px', border:'1px solid black', borderRadius:'50px', color:'black', '&:hover':{border:'1px solid transparent',color:'white', backgroundColor:'blue'} }}>Projects</Button>
        </div>
        <div className='about-text-container'>
          <p className='about-text-item'>
            I'm a Full Stack developer. 
            Looking for a full-time position in a friendly company. 
            I am a fast learner, proactive, inventive and responsible. 
            Sometimes creative. Also have practical skills experience 
            using Agile/Scrum methodology while working in team. 

            I will glady take part in new projects.
          </p>
        </div>
      </div>
    </div>
  );
}
