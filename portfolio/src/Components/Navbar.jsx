import React, { useState } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import './Navbar.css'
import logo from '../assets/logo.svg'
import underline from '../assets/nav_underline.svg'

const Navbar = () => {

  const [menu, setMenu] = useState ("about")
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#home' ><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu('service')}>Services</p></AnchorLink>{menu==='service'? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('work')}>Portifolio</p></AnchorLink>{menu==='work'? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'? <img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar