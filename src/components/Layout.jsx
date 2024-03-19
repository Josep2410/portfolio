import React from 'react'
import { Outlet ,  useLocation} from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Header from './Header';
import Sidebar from './Sidebar'
import '../styles/Layout.css'


export default function Layout() {
  const windowSize = useWindowSize()
  const location = useLocation()

  return (
    <div className="container">
      {windowSize.width >= 600 
        ? <Header />
        : location.pathname != '/' 
          ?<Sidebar/>
          : null
      }
      <main className='outer-main'>
        <Outlet />
      </main>
    </div>
  )
}
