import React from 'react'
import Card from '../Component/Card'
import './pagesCss/projectCard.css'
import {details} from '../Detail'
const Projects = () => {
  return (
    <div >
      <div>
        <br /><br />
        <h1 className='head'>Projects</h1>
      </div>
      <div className='projectCards'>
      <div className='detals'>
        {
          details.map((v)=>{
            return(
            <Card
            heading = {v.heading}
            dis = {v.dis}
            img = {v.img}
            tech = {v.tech}
            github = {v.github}
            preview = {v.preview}
            />)
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Projects

