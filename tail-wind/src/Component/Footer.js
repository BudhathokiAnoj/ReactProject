import React from 'react'

const Footer = () => {
  return <>
  
  <div className='bg-black text-white py-10 flex justify-center items-center'>
    <div className='max-w-[1240px] mx-auto px-16 grid grid-cols-2 lg:grid-cols-4'>
        <div className='mx-8'>
        <h3 className='border-b-2 border-primary text-bold text-2xl inline-block mt-4'>Products</h3>
        <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token List</li>
            <li>DeFi</li>
        </ul>
    </div>

    <div className='mx-8'>
        <h3 className='border-b-2 border-primary text-bold text-2xl inline-block mt-4'>Developer</h3>
        <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token List</li>
            <li>DeFi</li>
        </ul>
    </div>

    <div className='mx-8'>
        <h3 className='border-b-2 border-primary text-bold text-2xl inline-block mt-4'>Products</h3>
        <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token List</li>
            <li>DeFi</li>
        </ul>
    </div>

    <div className='mx-8'>
        <h3 className='border-b-2 border-primary text-bold text-2xl inline-block mt-4'>Governance</h3>
        <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token List</li>
            <li>DeFi</li>
        </ul>
    </div>
  </div>
  </div>
  
  </>
}

export default Footer
