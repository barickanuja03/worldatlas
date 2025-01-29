import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
     <div className='main-container my-5'>
       <div className='flex flex-row justify-between items-center'>
        <div></div>
          <div>
          <ul className='flex flex-row justify-end items-center gap-5'>
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
     </div> 
    </>
  )
}

export default Footer
