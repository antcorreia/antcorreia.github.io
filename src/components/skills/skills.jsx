import React from 'react'
import './skills.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Here are some of my</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="hard__skils">
          <h3>Hard Skills</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text_light'>Intermidiate</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Flask</h4>
                <small className='text_light'>Intermidiate</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text_light'>Beginneer</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
              <h4>Bassoon</h4>
              <small className='text_light'>Experienced</small></div>
            </article>
          </div>
        </div>
        <div className="soft__skils">
          <h3>Soft Skills</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Time Management</h4>
                <small className='text_light'>‎</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Flexibility</h4>
                <small className='text_light'>‎</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Cooperation</h4>
                <small className='text_light'>‎</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Problem Solving</h4>
                <small className='text_light'>‎</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Patience</h4>
                <small className='text_light'>‎</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__details-icon' />
              <div>
                <h4>Critical Thinking</h4>
                <small className='text_light'>‎</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills