import React from 'react'
import './About.css'
const About = () => {
  return <>
    <section className='aboutUs' id='about'>
      <h1>ABOUT<span> US</span></h1>
      <div className='foodImg'>
      <img src={'./images/food1.png'}/>
      <div className='para__btn'>
      <h3>What Makes Our Food Special?</h3>
      <p>
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, 
         Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nem
         o Facilis Cupiditate. Ex, Vel?<br/><br/>
         Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. 
         Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur
          Obcaecati Sapiente?
          </p>
          <button>Learn More</button>
          </div>
          </div>
    </section>
    </>
}

export default About
