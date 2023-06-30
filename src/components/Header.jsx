import React, { useState } from 'react'
{/*icons */}
import { RiCheckboxBlankCircleFill, RiBarChartHorizontalLine, RiCloseFill, RiCloseLine, RiMenu2Fill } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)



  return (
    <header className='flex  items-center justify-between xl:justify-start w-full py-4 px-8  h-[10vh]  z-50  bg-slate-950' >
        <div className='xl:w-1/6 text-center  -mt-4'>
            <a href='#' className='text-2xl font-bold  relative p-1 text-white ' > 
                Jeal Aragon 
            <span className='text-primary text-5xl'>.</span>{" "}
            <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-white -z-10' /> 
            </a>

        </div>

        <nav 
        className={`fixed  w-[80%]  md:w-[40%] xl:w-full h-full  ${showMenu? "left-0": "-left-full" } top-0 xl:static flex-1  flex flex-col xl:flex-row items-center justify-center gap-10  transition-all duration-500 bg-black`}>

            <button  onClick={()=> setShowMenu(!showMenu)}   className='-mt-[100%] text-white text-4xl' > <RiCloseFill/> </button>
            <a href="#" className='text-primary'>Home</a>
            <a href="#" className='text-primary'>About Use</a>
            <a href="#" className='text-primary'>Services</a>
        </nav>

        <button   onClick={()=> setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2 text-white  ' > 
        {showMenu ? <RiCloseLine/>: <RiMenu2Fill/> }
        
       </button>


    </header>
  )
}

export default Header