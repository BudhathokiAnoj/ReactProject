import React from 'react'
import {product} from '../Data'
import './Products.css'

const Products = () => {
  return <>

 <section className='imgProduct' >
        <h1 className='heading'>Our <span>products</span></h1>
        <div className='product__container' id='products'>
        {product.map((items,index)=>(
          <div className='images__container'>
                <div className='img__product'>
                <img src={items.img}/>
                </div>
                <h3>Testy and Healthy</h3>
                <div className='star__icon'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
                  </div>
                <div className='price'>$29.99</div>
                <button className='menuBtn__btn'>Add to cart</button>
          </div>
                ))}
        </div>
      </section>
  
  </>
}

export default Products
