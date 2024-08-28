import React, { useContext, useState } from 'react';
import { TbSmartHome, TbWriting } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineChat, MdConnectingAirports } from 'react-icons/md';
import { TbAppsFilled } from "react-icons/tb";
import './navBar.css'
import ThemeContext from '../Context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`sm:right-14 sm:mr-3 fixed top-2 right-0 z-20 shadow-2xl border-b rounded-2xl w-full md:w-11/12 ${
      theme === 'light' ? 'sm:right-14 sm:mr-3 bg-white border-gray-200' : 'bg-gray-900 border-gray-600'
    }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-5">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <TbAppsFilled className='font-extrabold text-3xl text-red-500'/>
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">My CV</span>
        </a>
        
        <div className="flex gap-4 justify-between items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <label htmlFor="theme-switch" className="switch">
            <input
              id="theme-switch"
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <span className="slider"></span>
            <span className="decoration"></span>
          </label>

          <button type="button" className="text-white hidden bg-black hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:flex gap-2 justify-center items-center">
            <MdConnectingAirports className="text-xl"/> Let's Talk
          </button>
          {/* Hamburger icon for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        
        {/* Mobile dropdown menu */}
        <div className={`flex flex-col items-center ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 flex gap-1 justify-center items-center" aria-current="page">
                <TbSmartHome/> Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex gap-2 justify-center items-center">
                <FaRegUser/> About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex gap-1 justify-center items-center">
                <GrServices/> Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex gap-1 justify-center items-center">
                <BsPersonWorkspace/> Work
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex gap-1 justify-center items-center">
                <TbWriting/> Blog
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex gap-1 justify-center items-center">
                <MdOutlineChat/> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
