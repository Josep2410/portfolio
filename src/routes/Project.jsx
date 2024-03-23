import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
import '../styles/Project.css'
import data from '../data/data'

export default function Project() {
  const params = useParams()
  const project = data.filter(project => project.id === params.id)[0]

  return (
    <>
      <h2 className='project-name'>{project?.title}</h2>
      <main className='project-container'>
        <section className='img-container'>
          <img src={project?.img} alt={project?.alt} />
        </section>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate alias ratione sed laborum commodi amet fugit sit. Nesciunt, architecto velit ad est excepturi consequuntur quos a in quod illo sed saepe deleniti, vel nobis aut. Consectetur ab reprehenderit amet dolores eveniet.
        </p>
        <section className='btns-container'>
          <button>
            <Link to="">View Live Site</Link>
          </button>
          <button id='btn-v2'><Link to="">Go to Github Repo</Link></button>
        </section>
      </main>
    </>
  )
}
