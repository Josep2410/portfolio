import React from 'react'
import SingleProject from '../components/SingleProject'
import '../styles/Projects.css'
import data from '../data/data.js'

export default function Projects() {
  console.log(data)
  return (
    <div className='projects-section'>
      <h2>Projects</h2>
      <main className='projects-container'>
      {data.map(project => <SingleProject key={project.title} title={project.title} img={project.img}/>)}
        
      </main>
    </div>
  )
}
