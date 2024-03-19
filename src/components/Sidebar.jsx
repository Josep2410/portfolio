import React , {useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import '../styles/Sidebar.css'

export default function Exp() {

  const [display , setDisplay] = useState(false)

  function toggleDisplay(){
    setDisplay(prev => !prev)
  }


  return (    
    <nav className='nav-container'> {/* will possibly need to change nav tag to section depending on existing code */}
      <IoIosMenu 
        className={`icon menu ${!display ? "onscreen" : "offscreen"} `} 
        onClick={toggleDisplay}
      />
      <section className={`nav-menu ${display ? "onscreen" : "offscreen"} ` }>
      <IoMdClose 
        className='icon close' 
        onClick={toggleDisplay}
      />
        <Link to="/" onClick={toggleDisplay}>Home</Link>
        <Link to="/about" onClick={toggleDisplay}>About</Link>
        <Link to="/projects" onClick={toggleDisplay}>Projects</Link>
        <Link to="/contact"onClick={toggleDisplay}>Contact</Link>
      </section>
    </nav>
      
  )
}