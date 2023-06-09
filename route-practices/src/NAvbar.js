import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Red from './Red';
import Blue from './Blue';
import { NavLink } from 'react-router-dom';
import Home from './Home';

const NAvbar = () => {
  return <>

    <div>
      <ul className='flex justify-center items-center'>
       
        <NavLink to={'/red'}>
            <li className='m-10 hover:cursor-pointer'>RED</li>
        </NavLink>

        <NavLink to={'/blue'}>
            <li className='m-10 hover:cursor-pointer'>BLUE</li>
        </NavLink>
      </ul>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='red' element={<Red/>}/>
        <Route path='blue' element={<Blue/>}/>
    </Routes>
  </>
    


}

export default NAvbar
