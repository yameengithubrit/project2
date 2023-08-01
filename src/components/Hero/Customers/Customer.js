import React from 'react';
import './Customer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faAmbulance, faStethoscope, faGraduationCap,  faSatelliteDish  } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineBank } from 'react-icons/ai';
import { GiOilDrum } from 'react-icons/gi';
import { FaGasPump } from 'react-icons/fa';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import {  faRocket } from '@fortawesome/free-solid-svg-icons';
import { FaCar } from 'react-icons/fa';
export default function Customer() {
  return (
    <div id='customer'>
      <div className='customer-container'>

      <div>
        <span className='stroke-text'>Customer SUPPORT PORTAL.</span>
        
        <div><p>At HAMSON’s we Design, Build and Support IT & Telecom networks for many of regional leading public and private sector companies.</p></div>

        <div><p>We offer a full life-cycle of network integration services – design, build, operate, and support of customer networks. With a unique operational model, best of breed portfolio, and technical expertise around complex networking, we support known companies.</p></div>
<div className='cs-login'>
  <h2>SUPPORT LOGIN</h2>
  <label>Email</label>
  <input type='text' placeholder='enter your email' /> 
  <label>Password</label>
  <input type='password' placeholder='enter your password' /> 
<button>Login</button>

</div>



        </div>

        <div>
    
     
     
     
    
     
     
     
      
<div className='row'>
  <div className='col-sm'>
  aerospace defence
      <FontAwesomeIcon icon={faRocket} size="2x" />
  </div>
  <div className='col-sm'>
  healthcare
      <FontAwesomeIcon icon={faStethoscope} size="2x" />
  </div>
  <div className='col-sm'>
  automobile
      <FaCar size={32} />
  </div>
  <div className='col-sm'>
  enterprises
      <FontAwesomeIcon icon={faBuilding} size="2x" />
  </div>
  <div className='col-sm'>
  oil and gass
      <FaGasPump size={32} />
  </div>
</div>
<div className='row'>
<div className='col-sm'>
  financial
      <GiOilDrum size={48}/>
  </div>
  <div className='col-sm'>
  government
      <AiOutlineBank size={48} />
  </div>
  <div className='col-sm'>
  telecommunication

      <FontAwesomeIcon icon={faSatelliteDish} size="2x" />
  </div>
  <div className='col-sm'>
  education
      <FontAwesomeIcon icon={faGraduationCap} size="2x" />
  </div>
</div>
      

    </div>
        
    
      </div>
    </div>
  )
}
