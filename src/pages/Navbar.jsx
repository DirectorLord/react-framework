import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  

<nav className="bg-[#2C3E50] fixed top-0 right-0 left-0">
  <div className="flex flex-wrap items-center justify-around p-4 ">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-3xl font-semibold text-white">Start Framework</span>
    </Link>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
        <li>
          <Link to="" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="about" className="block py-2 px-3 md:p-0 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500">About</Link>
        </li>
        <li>
          <Link to="portfolio" className="block py-2 px-3 md:p-0 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500">Portfolio</Link>
        </li>
        <li>
          <Link to="contact" className="block py-2 px-3 md:p-0 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}
