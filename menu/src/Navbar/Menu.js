import React from 'react'
import {menu} from '../Data'
import './Menu.css'

const Menu = () => {
  return (
    <section className='imgMenu' id='menu'>
        <h1 className='heading'>Our <span>menu</span></h1>
        <div className='menu__container'>
        {menu.map((items,index)=>(
          <div className='images'>
                <div className='imgCover'>
                <img src={items.img}/>
                </div>
                <h3>Testy and Healthy</h3>
                <div className='price'>$29.99</div>
                <button className='menuBtn'>Add to cart</button>
          </div>
                ))}
        </div>
      </section>
  )
}

export default Menu
