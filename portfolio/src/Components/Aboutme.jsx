import React from 'react'
import './Aboutme.css'
import about_Profile from '../assets/about_profile.svg'
import theme_patten from '../assets/theme_pattern.svg'
const Aboutme = () => {
  return (
    <div  id='about' className='about'>
        <div className='about-tittle'>
            <h1>About Me</h1>
            <img src={theme_patten } alt="" />
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={about_Profile} alt="" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis eius voluptates ullam minima nesciunt voluptate quas at maiores inventore magni, neque, voluptatum vel quia facere! Itaque quod sunt nihil!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laudantium iure maiores veritatis possimus aliquam voluptas facilis cumque expedita vero. Architecto ducimus id tenetur et eaque quisquam neque, sint ratione?</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML AND CSS</p><hr style={{width:"50%"}}/></div>
                    <div className='about-skill'><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className='about-skill'><p>Next Js</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>

        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}

export default Aboutme