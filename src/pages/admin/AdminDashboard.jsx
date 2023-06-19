import React from 'react'
import Sidebar from '../../component/admin/Sidebar';

export default function AdminDashboard() {
  const handelLogOut =()=>{
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
  }
    return (
    <div> 
      <Sidebar />

 
        <button onClick={handelLogOut} className='bg-red-400 rounded-lg p-2'>logOut
        </button>
    </div>
  )
}
