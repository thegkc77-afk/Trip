import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent font-sans">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            TripNivesh
          </h1>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/plan" className="hover:text-blue-600 transition">
            Plan Trip
          </Link>

          <a href="#how-it-works" className="hover:text-blue-600 transition">
            How it Works
          </a>

          <a href="#explore" className="hover:text-blue-600 transition">
            Explore
          </a>

          <a href="#saving-goals" className="hover:text-blue-600 transition">
            Saving Goal
          </a>

          <Link to="/about" className="hover:text-blue-600 transition">
            About Us
          </Link>
        </div>

        {/* Right Side (Login Button) */}
        
        <div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Log In
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar