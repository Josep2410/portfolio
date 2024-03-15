import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <h2>About</h2>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contacts</Link>
      
    </>
  )
}
