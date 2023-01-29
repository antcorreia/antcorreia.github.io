import React from 'react'
import './about.css'
import ME from '../../assets/me_about.png'
import {HiAcademicCap} from 'react-icons/hi'
import {FaLanguage} from 'react-icons/fa'
import {RiAwardFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Here's some information</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* Image */}
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt='about'/>
            </div>
        </div>

        {/* Content */}
        <div className='about__content'>

          {/* Cards */}
          <div className="about__cards">
            <article className="about__card">
              <HiAcademicCap className='about__icon'/>
              <h5>Education</h5>
              <small>BSc Informatics Engineering</small><br/>
              <small>10+ Years Music Experience</small>
            </article>

            <article className="about__card">
              <FaLanguage className='about__icon'/>
              <h5>Languages</h5>
              <small>English & Portuguese</small><br/>
              <small>Learning Japanese</small>
            </article>

            <article className="about__card">
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Yrs w/ Various Tech</small><br/>
              <small>Working as a Team</small>
            </article>
          </div>

          <p>
            I'm currently taking my Master's degree in Cybersecurity in University of Coimbra, where I also took my Bachelor's degree in Informatics Engineering, which gave me experience with a variety of programming languages, as well as working with SQL and Git. I also played the bassoon for about 10 years in the Music Conservatory of Coimbra, learning music theory in the process as well as playing in a orchestra.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About