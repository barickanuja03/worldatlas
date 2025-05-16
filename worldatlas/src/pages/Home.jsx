import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import About from './About';
function Home() {
  return (
    <>
      <section>
       <div className='main-container'>
         <div className='flex flex-col-reverse lg:flex-row justify-between items-center my-6'>
             <div className='flex justify-start flex-col flex-wrap gap-2'>
                <h2 className='text-2xl font-medium'>Explore the world,one country at a time</h2>
                <p className='text-md font-thin'>
                A country is a distinct part of the world, such as a state, nation, or other political entity. When referring to a specific polity,
                </p>
                <button className=''>
                  <NavLink to="/country">
                     <h3 className='flex justify-center flex-row gap-4 pt-3'>Explore Now<FaArrowRight  className='text-2xl'/></h3>
                  </NavLink>
                </button>
             </div>
             <div className=''>
               <img src='/images/worldatlas.png' alt='' className='w-full lg:w-[40vw] aspect-video p-7' />
             </div>
          </div>
       </div>
      </section>
      <About />
    </>
  )
}

export default Home
