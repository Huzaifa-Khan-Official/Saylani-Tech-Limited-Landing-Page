import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="z-20 fixed w-full">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">
                    SAYLANI TECH LIMITED
                </Link>
                <div className="hidden md:flex space-x-5">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    <Link to="/team" className="text-white hover:text-gray-300">Team</Link>
                    <Link to="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
                    <Link to="/career" className="text-white hover:text-gray-300">Career</Link>
                </div>
                <button className="hidden md:block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ml-4">
                    Get Started
                </button>
                <button
                    className="md:hidden bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <RxCross2 /> : <FaBars />}
                </button>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    <Link to="/" className="block text-white p-4 hover:bg-gray-800">Home</Link>
                    <Link to="/about" className="block text-white p-4 hover:bg-gray-800">About</Link>
                    <Link to="/services" className="block text-white p-4 hover:bg-gray-800">Services</Link>
                    <Link to="/contact" className="block text-white p-4 hover:bg-gray-800">Contact</Link>
                    <Link to="/team" className="block text-white p-4 hover:bg-gray-800">Team</Link>
                    <Link to="/portfolio" className="block text-white p-4 hover:bg-gray-800">Portfolio</Link>
                    <Link to="/career" className="block text-white p-4 hover:bg-gray-800">Career</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar