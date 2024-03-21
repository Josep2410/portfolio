import React , {useState } from 'react'
import '../styles/Accordion.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

/* Two functional components in this file, Accordion and Panel */

export default function Accordion() {

  return (
   <>
    <section className='accordianContainer'>
    <Panel 
      title="How did I get started in web-development?"
    >
      <p className='content'>
        I got started in web development shortly after I graduated from university. At the time, I felt like I didn't know anything about what I learned as a computer engineer to be desirable and hirable to companies, so I basically restarted and looked at careers I could see myself doing. Soon after, I found an interest in web development and have been self teaching ever since.
      </p>
    </Panel>
    <Panel 
      title="What's been your hardest challenge as a self-taught web developer?"
    >
      <p className='content'>
        Motivation. It was difficult to continuously work towards something without a clear sight of the end goal. I felt frustrated, stressed , and overwhelmed by the mountanous amount of skills I'd have to learn to be desirable and hirable by companies. James Clear refers to this period as the "valley of disappointment".
      </p>
    </Panel>
    <Panel 
      title="What are some of my current skills?"
    >
      <p className='content'> 
        Today, I am a student of HTML, CSS, Javascript, React, Figma and some back end technologies like Node.js, MongoDB, and Firebase.
      </p>
    </Panel>
    <Panel 
      title="Have you ever encountered a problem you couldn't fix? What did you do?"
    >
      <p className='content'>
        Yes. Many times. I asked other people for help. Whether it being on stackoverflow, online forums or discord servers.
      </p>
    </Panel>
    <Panel 
      title="Some of my favorite quotes are..."
    >
      <p className='content'>
        <strong>Dave Gray</strong> - "Remember to keep striving for progress over perfection. Alittle progress everyday will go a very long way"
      </p>

      <p className='content'>
        <strong>Usain Bolt</strong> - "I trained 4 years to run 9 seconds, and people give up when they don't see results in 2 months"
      </p>
     
      <p className='content'>
        <strong>Renato Constantino</strong> - "The definition of education means to have an eye openning experience."
      </p>
    </Panel>
    </section>
    </>
  )
}


function Panel({title, children}) {

  const [display , setDisplay] = useState(false)
  
  function handleDisplay (){
    setDisplay(prev => !prev)
  }

  return (
    <>
       <button className='accordion_btn'
        onClick={handleDisplay}
      >
        <p>{title}</p>
          {display  ? <TiArrowSortedUp className='svg' /> : <TiArrowSortedDown className='svg'/>}
        </button>
        <section className={`panel ${display && "appear" }`}>
        {children}
        </section>
    </>
  )
}