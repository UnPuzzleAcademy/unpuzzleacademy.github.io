import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import './styles/AppLayout.css';

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default AppLayout
