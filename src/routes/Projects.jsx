import React from 'react'
import SingleProject from '../components/SingleProject'
import '../styles/Projects.css'
import data from '../data/data.js'

export default function Projects() {
 
  const displayProjects = data.map(project => <SingleProject key={project.title} project={project}/>)

  return (
    <div className='projects-section'>
      <h2>Projects</h2>
      <main className='projects-container'>
      {displayProjects}
      </main>
    </div>
  )
}
