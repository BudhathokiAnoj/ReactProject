import React from 'react'
import imgTerminal from '../images/terminal.png'

const Developer = () => {
  return <>
  
    <div className='w-full bg-black text-white items-center justify-center flex py-5' id='developer'>
        <div className='text-left mx-5 py-12'>
            <h1 className='py-8 px-2'>Superpowers for DEFI developers</h1>
            <p className='py-2 px-4 text-[17px]'>Checkout the <span className='text-primary'>documentation</span>, the <span className='text-[var(--primary-blue)]'>quick start</span> at a guide below
                to integrade your project with thousands of tokens and billions
                of liquidity. 
            </p>
            <div className='py-20 items-center justify-center flex'>
            <img className='max-w-[250px] bg-cyan-500 shadow-lg shadow-cyan-500/50' src={imgTerminal} />
            </div>
        </div>
    </div>
  
  </>
}

export default Developer
