import React from 'react'
import './Image.css'

const Image = () => {
  return <>
    <section className='homeImg'>
      <img src={'./images/pan.jpg'} id='home'/>
      <div className='food__fresh'  >
        <h1>FRESH <span> FOOD IN THE </span>MORNING</h1>
        <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
           Placeat Labore, Sint Cupiditate Distinctio Tempora Reiciendis.
           </p>
           <button>Get Yours Now</button>
      </div>
    </section>
    
    </>
}

export default Image

