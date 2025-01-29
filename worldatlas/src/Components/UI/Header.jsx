import React from 'react';
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <>
      <header className='w-full h-11 shadow-md shadow-white/25 fixed top-0 z-50 bg-black/70 mb-7'>
        <div className='main-container h-11'>
           <div className='navbar flex flex-row justify-between align-middle py-2'>
             <div className='text-3xl font-serif font-bold'>
               <h1>
                 WorldAtlas
               </h1>
             </div>
             <ul className='flex flex-row justify-end items-center gap-6'>
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
           </div>
        </div>
      </header>
    </>
  )
}

export default Header
