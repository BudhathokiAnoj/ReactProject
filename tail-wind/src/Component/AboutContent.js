import React from 'react'

const AboutContent = (props) => {
  return <>

        <div className='border rounded-3xl m-4 hover:scale-[1.1] transform duration-300 ease-in-out'>
            <div className='text-left py-7 px-5 '>            <div className='bg-[var(--primary-blue)] inline-flex rounded-full p-2'>{props.icon}</div>
            <h3 className='font-bold py-4 text-xl'>{props.heading}</h3>
            <p className='text-[18px] py-4 px-3'>{props.text}</p>
            </div>
        </div>

  </>
}

export default AboutContent
