import React from 'react'
import { Nav } from '../Nav/Nav'
import "./Header.css"

export const Header = () => {
  return (
    <header className='container-header'>
        <h1>IP Address Tracker</h1>
        <Nav/>
    </header>
    
  )
}
