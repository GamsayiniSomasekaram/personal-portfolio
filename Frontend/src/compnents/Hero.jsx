import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaFacebookF, FaGithub } from 'react-icons/fa'

function Hero() {
  return (
   <>
   <div className=' bg-gradient-to-t from-green-100 to-white h-screen w-full md:flex flex-row '>
    <div className='h-screen md:pl-10 w-full md:w-5/6  flex flex-col items-center justify-center pl-10  '>
     <div className=' font-mono w-full md:p-5  pt-20 flex  text-4xl font-bold  text-green-800'>
      <h1> hii GAMSA!</h1>
     </div>
      <div className=' pt-10 font-mono w-full flex  text-2xl font-bold md:p-5 text-green-800'>
      <h1> Crafting Digital Magic with Code...</h1>
     </div>
      <div className=' pt-10 w-full  font-bold text-lg text-green-800 flex justify-center items-center font-serif pr-10 pt-5'>
        <p>I am skilled in a wide range of technologies, including programming languages such as JavaScript, and Java, with practical experience in frontend development using React.js, HTML, and CSS, and backend development with Node.js. I work confidently with databases like  MySQL and use Git and GitHub for version control in collaborative environments. In addition to coding, I have a strong eye for design and use tools like Canva to create clean, user-friendly interfaces and visual assets. I follow Agile methodologies, write maintainable code, and focus on building scalable, efficient, and visually appealing applications. </p>
      </div>


      
         
   


     <div className=' m-5 flex gap-4 justify-center items-center text-4xl text-green-200  font-bold md:pt-10'>
       <div className='p-1 rounded-3xl  bg-emerald-800 items-center justify-center hover:border-2 border-green-800'>
    <FaFacebookF/>
       </div>
        <div className='p-1 rounded-3xl  bg-emerald-800 items-center justify-center hover:border-2 border-green-800'>
     <AiFillInstagram/>
        </div>
         <div className='p-1 rounded-3xl  bg-emerald-800 items-center justify-center hover:border-2 border-green-800'>
   <FaGithub />
         </div>
      </div>
      
     
    </div>
         <div className= ' bg-gradient-to-t from-green-100 to-white h-screen w-full  md:w-3/6 md:pt-10 md:pr-10  flex flex-col gap-4 flex items-center justify-center  '>
         <img src="../src/assets/images/Human.jpg" alt="" className='rounded-full  border-2 border-green-800' />
          </div>

         
         

   </div>
   </>
  )
}

export default Hero
