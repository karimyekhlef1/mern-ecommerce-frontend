import React from 'react'
import Sidebar from '../../component/admin/Sidebar';
import { Outlet } from 'react-router-dom';

export default function AdminDashboard() {

    return (
    <div> 
      <Sidebar />
      <div className=' mx-28'>
      <Outlet  />

      </div>
    </div>
  )
}
