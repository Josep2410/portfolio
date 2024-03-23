import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleProject({project}) {
  return (
    <section className='individual-project'>
      <Link to={`${project.id}`}>
        <img src={project.img} alt={project.alt}/>
        <p className='title'>{project.title}</p>
      </Link>
    </section>
  )
}
