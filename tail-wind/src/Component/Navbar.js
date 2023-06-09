import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav)
  }
  return <>
  
  <div className='fixed w-full h-[90px] bg-black mt-[-20px]'>
    <div className='max-w-[1240px] px-4 mx-auto flex justify-between items-center h-full'>
        <div className='text-[var(--primary-blue)]'>
            <h1>Defi</h1>
        </div>
    <div className='md:flex hidden'>
        <ul className='flex text-white items-center'>
            <li><a href='#platform'>Platform</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#developer'>Developer</a></li>
            <li><a href='#community'>Community</a></li>
        <button className='ml-3'>Use Defi</button>
        </ul>
       </div>
       <div onClick={handleNav} className='block md:hidden'>

        {nav ? <AiOutlineClose size={30} className='text-white cursor-pointer'/> : 
        <AiOutlineMenu size={30} className='text-white cursor-pointer'/> 
        }
        
       </div>
    </div>
    </div>
    <div className={nav ? 'text-white text-2xl w-full absolute top-[90px] bg-black justify-center items-center text-center' : 
          'absolute top-[-100%]'}>
       <ul className='ml-[40%]'>
            <li className='mt-2xl w-[120px]'><a href='#platform'>Platform</a></li>
            <li className='mt-2xl w-[120px]'><a href='#about'></a>About</li>
            <li className='mt-2xl w-[120px]'><a href='#developer'>Developer</a></li>
            <li className='mt-2xl w-[120px]'><a href='#community'>Community</a></li>
            <button className='m-8 ml-[-50%]'>Use Defi</button>
        </ul>
    </div>   

  
  </>
}

export default Navbar
