import React from 'react'
import videoVid from '../images/video.mp4'
const Video = () => {
  return <>
  
  <div className='h-90vh w-full top-[90px]' id='platform'>
        <video className='object-cover h-[86.8vh] w-full absolute -z-10' src={videoVid} autoPlay loop muted/>

  <div className='text-white w-full h-[79vh] text-center flex flex-col justify-center px-4 mt-5'>
    <h1>Decentralize</h1>
    <h1> <span className='text-[var(--primary-blue)]'>Trading</span> Protocal</h1>
    <p className='py-3 text-xl'>Guraenteed liquidity trading for millions of user and top Etherum application</p>
   
    <div className='py-5'>
    <button className='m-2'>Use Defi</button>
    <button className='bg-transparent ml-5'>FaQ</button>
    </div>

  </div>
    <p className='text-white text-center text-2xl font-bold'>Total volume secured $42,104.200,783</p>
  </div>
  
  </>
}

export default Video
