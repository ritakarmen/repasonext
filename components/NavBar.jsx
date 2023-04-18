import Link from 'next/link'
import React from 'react'
import Home from '../pages/about';
import ActuveLink  from './ActuveLink';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={ style['menu-container']}>
      <ActuveLink text="Home" href = "/" />
      <ActuveLink text="About" href = "/about" />
      <ActuveLink text="Contact" href = "/contact" />
    </nav>
  )
}

export default NavBar