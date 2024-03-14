import React , {useEffect , useRef} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'



export default function Home() {

  const displayFirst = useRef()
  const displaySecond = useRef()
  const displayThird = useRef()

  useEffect(() => {
   
    //ref.current.classList.add("hide")
    const showFirst = setInterval(()=>{
      displayFirst.current.classList.remove("hide")
      displayFirst.current.classList.add("appear")
    } , 1000)

    const showSecond = setInterval(() => {
      displaySecond.current.classList.add("appear")
      displaySecond.current.classList.remove("hide")
    }, 3000)

    const showThird = setInterval(() => {
      displayThird.current.classList.add("appear")
      displayThird.current.classList.remove("hide")
    } , 5000)

    return () => {
      clearInterval(showFirst)
      clearInterval(showSecond)
      clearInterval(showThird)
    }
  }, [])

  return (
   <div className='home-section'>
    <section className='introduction'>
      <h3>Hi , my name is </h3>
      <h1 >Joseph Moreno.</h1>
      <h2 className='hide' ref={displayFirst}>I problem solve for a living.</h2>
      <h4 className='hide' ref={displaySecond}>FRONT-END-DEVELOPER & REACT ENTHUSIAST</h4>
    </section>
    <span className='hide'  ref={displayThird}>
      <button className="checkOutMore"><Link to="/about">Check out more about me</Link></button>
    </span>
   </div>
  )
}
