import React from 'react'
import { review } from '../Data'
import './Review.css'

const Review = () => {
  return <>
  <section className='imgReview' >
        <h1 className='heading'>Customer <span>review</span></h1>
        <div className='product__container' id='review'>
        {review.map((items,index)=>(
          <div className='images__container'>
            <div className='pi'>
            <i class="fa-solid fa-pizza-slice"></i>
            </div>
            <div className='para'>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
               Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum,
              Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.</p>
              </div>
                <div className='img__product'>
                <img src={items.img}/>
                </div>
                <div className='star__icon'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
                  </div>
          </div>
                ))}
        </div>
      </section>
  
  </>
   
}

export default Review
