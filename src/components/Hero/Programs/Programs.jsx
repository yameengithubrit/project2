import React, {useState} from 'react';
import './Programs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';





export default function Program() {
  return (
    <div id='program'>
    <div className='Programs' id='Programs'>
      {/*Header*/}
      <div className='programs-header'>
        <span className='stroke-text'>Explor</span>
        <span>Programs</span>
        <span className='stroke-text'>Professional Services</span>
      </div>

      <div className='programs-categories'>
        
      <div className='first'>
        <h1>Application Services</h1>
          <span>
          We can provide you with a Pool of application services for higher productivity, better end user experience and platform stability
          </span>
          <div className='join'>
          <span><h4>Join Now</h4></span>
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
          </div>


          <div className='second'>
        <h1>Managed services</h1>
          <span>
          Let us help you in offloading your IT operations, creating more time for you to focus on your Core Business.
          </span>
          <div className='join'>
          <span><h4>Explore</h4></span>
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
          </div>



        <div className='third'>
        <h1>Converged Infrastructure</h1>
          <span>
          Primarily a hardware defined solution that is designed by combining two or more computing solutions and presented through a single control panel
          </span>
          <div className='join'>
          <span><h4>Explore</h4></span>
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
          </div>

          <div className='fourth'>
        <h1>Security & intelligence</h1>
          <span>
          Allow us to help you set up your IT intelligence, risk management and compliances.
          </span>
          <div className='join'>
          <span><h4>Explore</h4></span>
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
          </div>
      </div>
      
    </div>
    </div>
  )
}
