import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-b-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wide">
                    <Link to="/" className="hover:text-gray-300 transition duration-300">
                        Car Showcase
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-gray-300 transition duration-300">
                        Home
                    </Link>
                    <Link to="/cars" className="hover:text-gray-300 transition duration-300">
                        Cars
                    </Link>
                    <Link to="/about" className="hover:text-gray-300 transition duration-300">
                        About
                    </Link>
                    <Link
                        to="/signin"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none hover:text-gray-300 transition duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden bg-blue-800 rounded-lg shadow-lg mt-2">
                    <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-blue-900 transition duration-300 rounded-t-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/cars"
                        className="block px-4 py-2 hover:bg-blue-900 transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Cars
                    </Link>
                    <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-blue-900 transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/signin"
                        className="block px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-b-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
    );
}