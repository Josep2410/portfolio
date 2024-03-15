import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleProject({title, img}) {
  return (
    <section className='individual-project'>
      <Link to="">
        <img src={img} alt="" />
        
      <p className='title'>{title}</p></Link>
    </section>
  )
}
