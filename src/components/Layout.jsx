import React from 'react'
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Header from './Header';
import '../styles/Layout.css'

export default function Layout() {
  const windowSize = useWindowSize()

  return (
    <div className="container">
      {windowSize.width >= 600 && <Header />}
      <main className='outer-main'>
        <Outlet />
      </main>
    </div>
  )
}
