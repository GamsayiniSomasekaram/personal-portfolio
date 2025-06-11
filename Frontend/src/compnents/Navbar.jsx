import React from 'react'
import { FaHome, FaPenNib, FaUser } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

import { AiOutlineFundProjectionScreen } 
from "react-icons/ai";

function Navbar() {
  return (
  <>
  <div className='fixed bg-gradient-to-t from-green-100 to-white  w-full  runded-b-3xl flex gap-4'>
        <div className=' font-serif   w-full  order-2  md:order-2 flex items-center justify-end text-green-800 text-xl md:justify-end gap-8 font-bold'>
              <a href="" className='hidden lg:flex gap-1 hover:border-2 brder-black rounded-full '><FaHome/> Home</a>
              <a href="" className='hidden lg:flex gap-1 hover:border-2 brder-black rounded-full'> <FaUser/> About</a>
              <a href="" className='hidden lg:flex gap-1 hover:border-2 brder-black rounded-full'> <AiOutlineFundProjectionScreen />Projects</a>
              <a href="" className='hidden lg:flex gap-1 hover:border-2 brder-black rounded-full'><IoDocumentText/>Resume</a>
               <a href="" className='hidden lg:flex gap-1 hover:border-2 brder-black rounded-full'><FaPenNib/>Blogs</a>
           <div className='  text-4xl cursor-pointer m-5 lg:hidden '>
          <FaHome />
         
           </div>

        </div>
        <div className=' w-full p-6 order-1 md:order-1 flex justify-start md:justify-start text-2xl text-green-800 uppercase font-bold'>
            logo
        </div>
        
    </div>
  </>
  )
}

export default Navbar
