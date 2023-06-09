import BookTable from '../BookTable/BookTable';
import './Navbar.css';

import React, { useRef } from 'react'

const Navbar = (props) => {
   const loginRef = useRef();
   const homeRef = useRef();
   const signRef = useRef();
   const bookTable = useRef();

    const displayForm = () =>{
     loginRef.current.classList.toggle("active")
     signRef.current.classList.remove("active")
     homeRef.current.classList.remove("active")
     bookTable.current.classList.remove("active");
    }
    
    const removeLogDiv = () =>{
      loginRef.current.classList.remove("active")
    }

    const showSignForm = () =>{
      loginRef.current.classList.remove("active")
      signRef.current.classList.toggle("active")
      bookTable.current.classList.remove("active")  
    }

    const removeSignDiv = () =>{
      signRef.current.classList.remove("active")
    }

    const displayHome = () =>{
      homeRef.current.classList.toggle("active")
      loginRef.current.classList.remove("active")
      signRef.current.classList.remove("active")
      bookTable.current.classList.remove("active")

    }

    const bookTableNo = () =>{
      bookTable.current.classList.toggle("active")
      homeRef.current.classList.remove("active")
      loginRef.current.classList.remove("active")
      signRef.current.classList.remove("active")
    }

  return <>
  
  <div className='navbar__parent'> 
    <h1 className='restaurant__name'>KFC</h1>
    <ul className='navbar__links'>
        <li className='navbar__list'><a href='#home'>Home</a></li>
        <li className='navbar__list'><a href='#about'>AboutUs</a></li>
        <li className='navbar__list'><a href='#menu'>Menu</a></li>
        <li className='navbar__list'><a href='#products'>Products</a></li>
        <li className='navbar__list'><a href='#review'>Review</a></li>
        <li className='navbar__list'><a href='#contact'>Contact</a></li>
        <li className='navbar__list'><a href='#blogs'>Blogs</a></li>
    </ul>
    <div className='navbar__login'>
        <a href='#login' className='login' onClick={displayForm}>Login/Register</a>
        <div className='line'></div>
        <a href='#book' className='login' onClick={bookTableNo}>Book Table</a>
    </div>

    <div className='icon'>
    <i class="fa-sharp fa-solid fa-bars" id='homeSlide' onClick={displayHome}></i>
    </div>
  </div>

  <div className='navbar__container' ref={homeRef}>
    <ul className='navbar__home'>
        <li className='navbar__list'><a href='#home'>Home</a></li>
        <li className='navbar__list'><a href='#about'>AboutUs</a></li>
        <li className='navbar__list'><a href='#menu'>Menu</a></li>
        <li className='navbar__list'><a href='#products'>Products</a></li>
        <li className='navbar__list'><a href='#review'>Review</a></li>
        <li className='navbar__list'><a href='#contact'>Contact</a></li>
        <li className='navbar__list'><a href='#blogs'>Blogs</a></li>
    </ul>
  </div>

  <div className='login__form' ref={loginRef}>
    <form>
    <i class="fa-solid fa-xmark" onClick={removeLogDiv}></i>
        <h1>LogIn</h1>
        <input placeholder='username'/>
        <input placeholder='password'/>
    </form>
      <div className='btn'>
        <button className='login__btn'>Login</button>
        <button className='login__btn' onClick={showSignForm}>sign in</button>
      </div>
    </div>

    <div className='sign__form' ref={signRef}>
    <form>
    <i class="fa-solid fa-xmark" onClick={removeSignDiv}></i>
        <h1>Sign In</h1>
        <input placeholder='First name'/>
        <input placeholder='Last name'/>
        <input placeholder='password'/>
    <button className='submit'>Submit</button>
    </form>
    </div>
   <div className='book__container' ref={bookTable}>
    <BookTable/>
   </div>
    
  </>
}

export default Navbar
