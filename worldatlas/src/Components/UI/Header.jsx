
import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import { Menu, X, PhoneCall, Globe, Palette } from "lucide-react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className='w-full h-11 bg-[#181818] shadow-md shadow-white/25 sticky top-0 z-50 bg-black/70 mb-7'>
        <div className='main-container h-11 mb-11'>
           <div className='navbar flex flex-row justify-between align-middle py-2'>
             <div className='text-3xl font-serif font-bold'>
               <h1>
                 WorldAtlas
               </h1>
             </div>
             <ul className='flex-row justify-end  gap-6 hidden md:flex space-x-8 items-center'>
               <li>
                <NavLink to="/">Home</NavLink>
               </li>
               <li>
                <NavLink to="/about">About</NavLink>
               </li>
               <li>
                <NavLink to="/country">Country</NavLink>
               </li>
               <li>
                <NavLink to="/contact">Contact</NavLink>
               </li>
             </ul>
             {/* Mobile device */}
               <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <NavLink to="/" className="block hover:text-yellow-400">Home</NavLink>
          <NavLink to="/about" className="block hover:text-yellow-400">About</NavLink>
          <NavLink to="/country" className="block hover:text-yellow-400">Country</NavLink>
          <NavLink to="/contact" className="block hover:text-yellow-400">Contact</NavLink>
        </div>
      )}
       </div>
      </header>
    </>
  )
}

export default Header
