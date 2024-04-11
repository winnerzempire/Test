import React from 'react'
import './Work.css'
import theme_patten from '../assets/theme_pattern.svg'
import mywork_data from '../assets/mywork_data.js'
import  arrow_icon from '../assets/arrow_icon.svg'


const Work = () => {
  return (
    <div id='work' className='work'>
        <div className='worktitle'>
            <h1>My latest work</h1>
            <img src={theme_patten} alt="" />
        </div>
        <div className='work-container'>
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />

            })}
        </div>
        <div className='work-showmore'>
            <p>Show More</p>
            <img src={arrow_icon } alt="" />
        </div>
    </div>
  )
}

export default Work