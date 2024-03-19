import React from 'react'
import { Link } from 'react-router-dom'
import { LuHexagon } from "react-icons/lu";

export default function Header() {
  return (
    <header>
      <section className='logoContainer'>
        <LuHexagon className='iconSVG' />
        <Link to="/">JM</Link>
      </section>
      <nav className='biggerScreen'>
        <ol>
          <li><Link to="about">About</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ol>
      </nav>
    </header>
  )
}
