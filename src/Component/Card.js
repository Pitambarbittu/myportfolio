import React from 'react'


import './card.css'

const Card = (props) => {
    const{img,dis,heading,tech,github,preview} = props
  return (
    <div className='mainCard'>
       <div className='image'>
          <img width = "100%" src= {img} alt="" />
        </div> <br /><br />
    <div className='card'>
        <div className='buttom'>
            <h2>{heading}</h2> <br /><br />
            <p>{dis}</p><br /><b></b>
             <b>Tech Stack  : {tech}</b>
        </div> <br /><br /> 
        <div className='links'>
        <div>
        <i style={{color:'orange'}} class="fa-solid fa-2x fa-link"></i> 
          <a style={{color:'orange'}} href={preview} target = "blank">Live Preview</a>
        </div>
            <div>
            <i style={{color:'orange'}} class="fa-brands fa-2x  fa-github"></i>
            
            <a style={{color:'orange'}} href={github} target = "blank" >View Code  </a>
            </div>
        </div> <br /><br />
    </div>
    </div>
  )

}

export default Card