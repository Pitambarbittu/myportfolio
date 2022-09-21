import React from 'react'
import css from '../tech/css.png'
import html from '../tech/js.png'
import js from '../tech/html.png'
import git from '../tech/git.png'
import npm from '../tech/npm.png'
import vs from '../tech/vs.png'
import firebase from '../tech/firebase.png'
import postman from '../tech/postman.png'
import node from '../tech/node.png'
import react from '../tech/react.png'


import './pagesCss/technology.css'
export const Technologies = () => {
  return (
    <div>
      <div className='technology'>
      <h1>Tech Stack</h1> <br />
      <p>Technologies I've been working with recently</p><br />
      </div>
      <div className='tech'>
        <img src= {css} alt="" />
        <img src= {js} alt="" />
        <img src= {html} alt="" />
        <img src= {react} alt="" />
        <img src= {node} alt="" />
      </div>
       <div className='tools'>
       <h1>Tools</h1>
       </div>
       <div className='tools__img'>
          <img src={vs} alt="" />
          <img src={git} alt="" />
          <img src={npm} alt="" />
          <img src={firebase} alt="" />
          <img src={postman} alt="" />
       </div>
    </div>
  )
}
