import React from 'react'
import './pagesCss/about.css'
import man from '../Image/man.png'
export const About = () => {
  return (
    <div className='About'>
      <div className=' card__section'>
        <div className='About__first'>
          <h1>About Me</h1><br /><br />
          <p>Frontend developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve a genuine problem for people.</p>
        </div>
     <section>
      <img src={man} alt="" />
     </section>
        </div>
          <div className='About__second'>
        <h1>Education</h1>
          <section className='stack'>
            <p>Full Stack Developer</p>
            <p>feb 2022 - present day</p>
          </section>
          <section className='prep'>
            <p>Prepbyetes</p> <p>Online</p>
          </section><br />
          <hr />
          <section className='stack'>
            <p>Bachelor in Mechanical Engineering  (B.tech)</p>
            <p>2017 - 2021</p>
          </section>
          <section className='prep'>
            <p>ADAMAS UNIVERSITY</p> <p>KOLKATA (W.B)</p>
          </section>
        </div>
    </div>
  )
}
