import React, { useRef } from 'react';

import './Join.css'

import emailjs from 'emailjs-com';

export default function Join() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dlbycbi', 'template_k1yb73z', form.current, 'O__E3pKOIg_cGi4IC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id="Join-now">
        <div className='left-j'>
            <hr />
            <div >
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
            </div>

            <div >
            <span>YOUR WEB</span>
            <span className='stroke-text'>WITH US?</span>
            </div>
            
        </div>
        <div className='right-j'>

            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user-email' placeholder='Enter your email' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}
