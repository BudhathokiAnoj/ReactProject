import React from 'react'
import {SiHiveBlockchain, SiHive, SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'
import AboutContent from './AboutContent'

const About = () => {
  return <>
  <div className='w-100% bg-black text-white py-6' id='about'>
  <div className='  text-center max-w-[1240px] mx-auto py-16 px-4'>
    <div>
     <h1 className='py-3'>A Growing Protocol Eco</h1>
     <p className='text-xl py-4 px-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley.</p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-2'>
        <AboutContent icon={<SiHiveBlockchain size={40}/>} heading='Reliable, Temper proof network'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the when an unknown printer took a galley.'/>

        <AboutContent icon={<SiHive size={40}/>} heading='Seamless connection to any API'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the when an unknown printer took a galley.'/>

        <AboutContent icon={<SiFsecure size={40}/>} heading='Proven, Ready-made solution'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the when an unknown printer took a galley.'/>

        <AboutContent icon={<VscServerProcess size={40}/>} heading='Secure of-chain competition'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the when an unknown printer took a galley.'/>
        </div>
     </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    </div>
  </div>
  
  </>
}

export default About
