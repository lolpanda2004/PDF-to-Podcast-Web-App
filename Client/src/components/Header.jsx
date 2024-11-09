import React from 'react'
import '../components/Header.css'

const Header = () => {
  return (
    <div>
      <h1 className='heading'>LLM Podcaster</h1>
      <ul className='head-elements'>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Product</li>
      </ul>
    </div>
  )
}

export default Header
