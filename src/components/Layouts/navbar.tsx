import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => (
  <nav className="flex py-8">
    <div>
      <Link to="/" className="cursor-pointer">
        <img src="/app-icon.png" className="rounded-full h-12 inline-block" />
        <h6 className="inline-block ml-2 font-semibold">Tengku Hafidz</h6>
      </Link>
    </div>
    <div className="flex-grow"></div>
    {/* <div>
      <Link to="/" className="nav-menu border-b-4 border-blue-400">
        <span className="font-bold">01</span> home
      </Link>
      <Link to="/" className="nav-menu">
        <span className="font-bold">02</span> hustles
      </Link>
      <Link to="/" className="nav-menu">
        <span className="font-bold">03</span> resources
      </Link>
      <Link to="/" className="nav-menu">
        <span className="font-bold">04</span> journal
      </Link>
    </div> */}
    <div className="ml-8">
      <i className="fas fa-lightbulb text-2xl cursor-pointer hover:text-yellow-400"></i>
    </div>
  </nav>
)

export default Navbar
