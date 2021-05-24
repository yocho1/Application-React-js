import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='logo'>
        <h1>
          <Link to='/'>STL</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to='/show'>Show The List</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
