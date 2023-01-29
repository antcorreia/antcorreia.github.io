import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'
import ME from '../../assets/me.png'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5> Hello, I am</h5>
        <h1> António Correia</h1>
        <h5 className="text_light">Cybersecurity Student</h5>
        
        {/* Image */}
        <div className='me'>
          <img className='faded_img' src={ME} alt="me" />
        </div>

        {/* Buttons */}
        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      
        {/* Socials */}
        <div className='header__socials'>
          <a href='https://www.linkedin.com/in/antcorreia/' target="_blank_"><BsLinkedin/></a>
          <a href='https://github.com/antcorreia' target="_blank_"><BsGithub/></a>
        </div>
      </div>
    </header>
  )
}

export default Header