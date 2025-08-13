import React from 'react'
import { Link } from 'react-router-dom'
Link

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">New</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default Nav