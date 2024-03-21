import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import '../styles/About.css'

export default function About() {
  return (
    <section className="about_section">
      <h2>About Me</h2>
      <Accordion />
    </section>
  )
}
