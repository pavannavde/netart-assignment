import React from 'react';
import heroimg from '../../assets/1.png';
import heroimg1 from '../../assets/2.png';
import './style.css';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='leftDiv'>
            <img src={heroimg} alt='HeroImg'/>
        </div>
        <div className='rightDiv'>
         <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
         </ul>
         <img src={heroimg1} alt='img'/>
         <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div> 
    </div>
  )
}

export default Hero
