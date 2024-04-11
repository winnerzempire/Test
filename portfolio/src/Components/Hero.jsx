import React from 'react'
import './Hero.css'
import profle_img from '../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profle_img} alt="" />
        <h1><span>I'm Alex Benny,</span>Frontend Developer based in USA.</h1>
        <p>I am a frontend Developer from california, USA with 2 years of expereince</p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect With Me</div>
            <div className='hero-resume'>My Resume</div>
        </div>
        

       

    </div>
  )
}

export default Hero