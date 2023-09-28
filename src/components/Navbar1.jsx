import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='d-flex justify-content-between px-5'>
      <Link to='/'>Home</Link>
      <Link to='/body'>Tasks</Link>
      <Link to='/new'>New Task</Link>
      {/* <Link to='/edit'>Edit Task</Link> */}
    
    </div>
  )
}

export default Navbar1