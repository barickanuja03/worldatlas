import Link from 'next/link'
import React from 'react'
import { useState } from 'react';

function Header() {
  const [isClick,setisclick] = useState(false);
const toggleNavbar = () :void =>
{
 setisclick(!isClick)
}
  return (
    <>
     <div className='w-full py-7 bg-black/30'>
        <div className="main-container flex flex-row justify-between">
          <div className='flex-shrink-0'><h1 className='text-xl font-bold'>World<span>Atlas</span></h1></div>
          <div className='hidden md:block'>
            <ul className='flex flex-row justify-center items-center gap-5 text-xl'>
                <li className='hover:text-blue-800'><Link href="/">Home</Link></li>
                <li className='hover:text-blue-800'><Link href="/about">About</Link></li>
                <li className='hover:text-blue-800'><Link href="/country">Country</Link></li>
                <li className='hover:text-blue-800'><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='md:hidden flex items-center'>
             <button className='inline-flex items-center justify-center p-2 rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
             ' onClick={toggleNavbar}>
               {isClick ? (
                <svg
                className='h-6 w-7'
                xmlns='https://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentcolor' 
                >
                 <path 
                 strokeLinecap='round'
                 strokeLinejoin='round'
                 strokeWidth={2}
                 d='M6 18L18 6M6 6L12 12'
                 />
                </svg>
               ) : (
                 <svg
                 className='h-6 w-7'
                 xmlns='https://www.w3.org/2000/svg'
                 fill='none'
                 viewBox='0 0 24 24'
                 stroke='currentcolor'
                 >
                   <path
                   strokeLinecap='round'
                   strokeLinejoin='round'
                   strokeWidth={2}
                   d='M4 6H16M4 12H16m-7 6H7'
                   />
                 </svg>
               )}
             </button>
            </div>
           
          </div>
          {isClick && (
             <div className='md:hidden bg-black text-white'>
              <div className='w-[100%] h-auto'>
              <ul className='flex flex-col items-center pt-7 text-lg'>
                <li className='hover:text-blue-800'><Link href="/">Home</Link></li>
                <li className='hover:text-blue-800'><Link href="/about">About</Link></li>
                <li className='hover:text-blue-800'><Link href="/country">Country</Link></li>
                <li className='hover:text-blue-800'><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              </div>
            )}
        </div>
    </>
  )
}

export default Header
