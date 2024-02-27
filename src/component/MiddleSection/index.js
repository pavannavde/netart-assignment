import React from 'react'
import './style.css'
import pumpImg from '../../assets/3.png'

const MiddleSection = () => {
  return (
    <div className='middleSection'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={pumpImg} alt='img'/>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
    </div>
  )
}

export default MiddleSection
