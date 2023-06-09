import React from 'react'
import Footer from './Footer'

const Community = () => {
  return <>
  
  <div id='community' className=' w-full bg-black flex justify-center items-center py-12'>
    <div className='flex-cols justify-center items-center'>
        <h1 className='text-[var(--primary-blue)]'>Join Our DeFi Community</h1>
        <div className='py-5 px-8'>
            <input className='text-black rounded-3xl bg-white p-2 mr-4' type='email' placeholder='Enter your email'/>
            <button>Sign Up</button>
            <div className='text-white flex items-center justify-center py-3 mr-9'>
            <input type='checkbox'className='mr-2'/>
            <p>Yes, I agree to receive communication from DeFi</p>
            </div>
        </div>
    </div>
  </div>
  <div> <Footer/> </div>
  
  
  </>
}

export default Community
