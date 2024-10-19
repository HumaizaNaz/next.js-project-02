import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="Header bg-blue-600 p-4 flex items-center justify-between">
     
      <div className="logo">
        <Link href="/home">
          <span className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300">LoGo</span>
        </Link>
      </div>

    
      <ul className="flex space-x-8">
        <li>
          <Link href="/home">
            <span className="text-white hover:text-gray-300 transition duration-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-white hover:text-gray-300 transition duration-300">About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <span className="text-white hover:text-gray-300 transition duration-300">Contact Us</span>
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <span className="text-white hover:text-gray-300 transition duration-300">Skills</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
