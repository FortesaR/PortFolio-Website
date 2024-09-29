import React from 'react'
import "./project.css"
import atlas from "../../images/atlas.png"
import edma from "../../images/Edma.png"

const Projekte = () => {


  return (
    <div className='my-project'>
      <div className='my-project-title'>
        <h1>My Latest Projects</h1>
      <div className='grid-container'>
      <div class="grid-item">
        <img src={atlas} alt="atlas"></img>
        <h3> Atlas</h3>
        <p>React , Sass</p>
      </div>
  <div class="grid-item">  <img src={edma} alt="edma"></img>
  <h3> Edma</h3>
  <p>React , Sass</p></div>
  <div class="grid-item">  <img src={atlas} alt="atlas"></img>
  <h3> Atlas</h3>
  <p>React , Sass</p></div>  
      </div>
      </div>
    </div>
    
  )
}

export default Projekte