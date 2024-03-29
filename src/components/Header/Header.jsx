import * as React from 'react'
import { NavLink } from 'react-router-dom';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
      <div>
        <a href="/" style={{ display: "flex", alignItems: "center", }}>
          <SquareRoundedIcon sx={{ color: "blue" }} />
          <span className='header-name-wrapper'>Oleg Tremba</span>  <span style={{ fontSize: "17px", textTransform: "uppercase", lineHeight: "1.2em" }}>/  Fullstack Developer</span>
        </a>
      </div>
      <nav className='nav-container'>
        <NavLink className={'nav-link'} to="/">About me</NavLink>
        <NavLink className={'nav-link'} to="/resume">Resume</NavLink>
        <NavLink className={'nav-link'} to="/projects">Projects</NavLink>
        <NavLink className={'nav-link'} to="/contact">Contact</NavLink>
      </nav>
      </div>
    </header>
  )
}