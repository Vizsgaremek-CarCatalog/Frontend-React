import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">Car Showcase</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-200 transition">
                        Home
                    </Link>
                    <Link to="/cars" className="hover:text-gray-200 transition">
                        Cars
                    </Link>
                    <Link to="/about" className="hover:text-gray-200 transition">
                        About
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
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
                <div className="md:hidden bg-blue-700">
                    <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-blue-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/cars"
                        className="block px-4 py-2 hover:bg-blue-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Cars
                    </Link>
                    <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-blue-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
}