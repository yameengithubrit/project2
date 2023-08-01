import React, {useState} from 'react';
import './Reasons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function Reason() {
  
  return (
    <div id='reason'>
    <div className='Reasons' id='reasons'>
      <div className='left-r'>
        <img src="front.jpg" alt="" className='img1'/>
        <img src="e.jpg" alt="" className='img2' />
        <img src="d.jpg" alt=""  className='img3'/>
        <img src="OIP.jpg" alt="" className='img4' />
      </div>

      <div className='right-r'>
        <span>Some Reasons</span>

        <div>
            <span className='stroke-text'>Why</span>
            <span>Choos Us</span>
        </div>


        <div className='details-r'>

        <div>
        <FontAwesomeIcon icon={faCheck}  color='orange'/>
            <span>Best of breed </span>
            </div>


            <div>
        <FontAwesomeIcon icon={faCheck}  color='orange'/>
            <span>Technical excellence</span>
            </div>

            <div>
        <FontAwesomeIcon icon={faCheck}  color='orange'/>
            <span>Customer trust</span>
            </div>

            <div>
        <FontAwesomeIcon icon={faCheck}  color='orange'/>
            <span>cycle of network integration services</span>
            </div>
            </div>
            </div>

           
      
    </div>
    </div>
  )
}
