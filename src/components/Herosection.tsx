import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
function Herosection() {
  return (
    <>
     <div className="main-container group">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center lg:max-w-max lg:h-[50vh] h-auto gap-y-4">
            <div className='flex flex-col gap-2 w-full md:w-[50%]'>
                <h2 className='text-2xl font-extrabold '>
                    Explore the world, one country at a time
                </h2>
                <p className='text-sm '>
                    Discover the history culture and beauty of every nation sort search and filter through countries to find the details you need.
                </p>
                   <Link href="/country" className="py-2 px-4 max-w-max my-4 border-2 border-white group-hover:bg-red-800 group-hover:border-red-800 rounded-xl capitalize">Start Exploring <span><FaArrowRight className='inline text-xl'/></span></Link> 
            </div>
            <div>
                <img src="https://tse3.mm.bing.net/th?id=OIP.uN5zEEh3MBbHTSbg4VPVbAHaEK&pid=Api&P=0&h=180" alt="" className='group-hover:scale-110 delay-200 w-full h-full object-fill'/>
            </div>
        </div>  
      </div> 
    </>
  )
}

export default Herosection
