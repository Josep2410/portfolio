import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import Project from './routes/Project'
import './styles/App.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="projects/:id" element={<Project />} />
        <Route path="contact" element={<Contact />}/>

      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
