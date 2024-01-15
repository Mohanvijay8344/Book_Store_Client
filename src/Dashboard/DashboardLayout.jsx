import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

export default function DashboardLayout() {
  return (
    <div>
        <SideBar />
        <Outlet />
    </div>
  )
}
