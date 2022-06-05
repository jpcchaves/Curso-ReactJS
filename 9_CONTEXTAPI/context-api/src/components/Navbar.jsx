// Styling
import React from 'react'

// Router
import { NavLink } from "react-router-dom";

// Pages
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to="/page1" element={<Page1/>}> Página principal </NavLink>
        <NavLink to="/page2" element={<Page2/>}> Página principal </NavLink>
        <NavLink to="/page3" element={<Page3/>}> Página principal </NavLink>
    </nav>
  )
}

export default Navbar
