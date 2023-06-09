import React from 'react'
import './Contact.css'

const Contact = () => {
  return  <>
  
  <section className='contact__container' id='contact'>
    <h1 >Contact<span> us</span></h1>
    {/* <div className='map'>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald's!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
    </div> */}

    <form className='input__values'>
        <h2>Get in touch</h2>
        <div className='inputs'>
            <input type='text' placeholder='name' className='inputVal'/>
          </div>
          <div className='inputs'>
            <input type='text' placeholder='email' className='inputVal'/>
          </div>
          <div className='inputs'>
            <input type='number' placeholder='contact' className='inputVal'/>
          </div>
          <button className='contact__btn'>Contact Now</button>
    </form>
  </section>

  
  </>
}

export default Contact
