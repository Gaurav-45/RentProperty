import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav">
        <div className="logo">
          <h1>RentProperty</h1>
        </div>
        <div className="singup">
          <button className="login">LogIn</button>
          <button className="signin">SignUp</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar