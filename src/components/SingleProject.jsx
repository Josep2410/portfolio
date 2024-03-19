import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleProject({project}) {
  return (
    <section className='individual-project'>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.img} alt={project.alt}/>
      <p className='title'>{project.title}</p></a>
    </section>
  )
}
