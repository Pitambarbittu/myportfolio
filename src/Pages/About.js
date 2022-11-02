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
        <h1>Education-</h1>
          <section className='stack'>
            <p>Full Stack Developer</p>
            <p>feb 2022 - present day</p>
          </section>
          <section className='prep'>
            <p>Prepbyetes</p> <p>Online</p>
          </section><br />
          <hr className="hr_line" />
          <section className='stack'>
            <p>Bachelor in Mechanical Engineering  (B.tech)</p>
            <p>2017 - 2021</p>
          </section>
          <section className='prep'>
            <p>ADAMAS UNIVERSITY</p> <p>KOLKATA (W.B)</p>
          </section> <br />
          <hr className="hr_line" />
          <section className='stack'>
            <p>Intermediate Education in Mechanical Engineering  (Diploma)</p>
            <p>2014 - 2016</p>
          </section>
          <section className='prep'>
            <p>KALINGA UNIVERSITY</p> <p>Raipur, Chhattisgarh</p>
          </section> <br />
          <hr className="hr_line" />
          <section className='stack'>
            <p>Secondary Education  (Automobile Engineering & Technology)</p>
            <p>2012 - 2014</p>
          </section>
          <section className='prep'>
            <p>KHAGRA GURUDAS TARASUNDARI INSTITUTION</p> <p>Murshidabad (West bengal)</p>
          </section> <br /> <br /> <hr className="hr_line" />
          <h1>Work Experience-</h1>
          <section className='stack'>
            <h2>Maruti Suzuki Commercial (Friendly Motors) - Mysore (Karnataka) India</h2>
            <p>04/2021 - 07/2021</p>
          </section>
          <section className='prep'>
            <h3>Role - </h3> <p>Service Advisor</p>
          </section> <br />
          <h3>Achievements/Tasks - </h3> 
             <p>I worked as Service Advisor with ample of responsiblities, like dealing with clients , <br />  maintaining the stuff's for the services and guide the workers to repairing and maintenance of Maruti Suzuki cars etc.</p> <br />
          <hr className="hr_line" />
          <section className='stack'>
            <h2>Primax Equipment Pvt. Ltd - Kolkata (West Bengal)</h2>
            <p>05/2029 - 07/2019</p>
          </section>
          <section className='prep'>
            <h3>Role - </h3> <p>Internship</p>
          </section> <br />
          <h3>Achievements/Tasks - </h3> 
             <p>During the training I worked with Bending, Cutting, Tapping of M. S. Shaft, Drilling, Gas Cutting, <br /> MIG Welding - Gas Metal Arc Welding (GMAW) , Arc Welding, Surface Development (viz. Marking, Sheet Cutting, Angle Cutting).</p> <br />
          <hr className="hr_line" />

          <section className='stack'>
            <h2>Endurance Technologies Ltd.  -  Pune (Maharashtra) India</h2>
            <p>05/2015 - 03/2016</p>
          </section>
          <section className='prep'>
            <h3>Role - </h3> <p>CNC Machine Operator.</p>
          </section> <br />
          <h3>Achievements/Tasks - </h3> 
             <p>Cylinder Head Breather Pressing Machine Operated. <br />
             Studied the different type of CNC controls which is used in CNC Machine. And also Learnt the Assembly For CNC Machine.
             </p> <br />
          <hr className="hr_line" />
          
        </div>
    </div>
  )
}
