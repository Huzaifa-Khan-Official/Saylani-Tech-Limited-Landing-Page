import React from 'react'

function Navbar() {
    return (
        <header className="relative z-10">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold">
                    SAYLANI TECH LIMITED
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
                    <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    <Link href="/team" className="text-white hover:text-gray-300">Team</Link>
                    <Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
                    <Link href="/career" className="text-white hover:text-gray-300">Career</Link>
                </div>
                <button className="hidden md:block bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">
                    Get Started
                </button>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    <Link href="/" className="block text-white p-4 hover:bg-gray-800">Home</Link>
                    <Link href="/about" className="block text-white p-4 hover:bg-gray-800">About</Link>
                    <Link href="/services" className="block text-white p-4 hover:bg-gray-800">Services</Link>
                    <Link href="/contact" className="block text-white p-4 hover:bg-gray-800">Contact</Link>
                    <Link href="/team" className="block text-white p-4 hover:bg-gray-800">Team</Link>
                    <Link href="/portfolio" className="block text-white p-4 hover:bg-gray-800">Portfolio</Link>
                    <Link href="/career" className="block text-white p-4 hover:bg-gray-800">Career</Link>
                </div>
            )}
        </header>
    )
}

export default Navbar