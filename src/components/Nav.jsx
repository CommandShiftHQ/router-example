import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='search'>Search</NavLink></li>
            <li><NavLink to='products'>Products</NavLink></li>
            <li><NavLink to='products/54895594'>Product with ID</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav
