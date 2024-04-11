import React from 'react'
import './Service.css'
import theme_patten from '../assets/theme_pattern.svg'
import services_data from '../assets/services_data.js'
import  arrow_icon from '../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='service' className='services'>
        <div className='services-tittle'>
            <h1>My Services</h1>
            <img src={theme_patten} alt="" />
        </div>
        <div className='service-container'>
            {services_data.map((service, index)=>{
                return  <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-read-more'>
                        <p>Read more</p>
                        <img src={arrow_icon } alt="" />
                    </div>
                </div>
            })}

        </div>
    </div>
  )
}

export default Service