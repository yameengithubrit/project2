import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion';



export default function Hero() {
  
  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div id='hero'>
    <div className='hero'>
      
      {/*Header*/}
      <div className='left-h'>
        
        <Header />


        {/*the-best-ad*/}

        <div className='the-best-ad'>
            <motion.div
              initial = {{left: mobile? "178px": "238px"}}
              whileInView = {{left: '8px'}}
              transition = {{...transition, type: 'tween'}}
              >
            </motion.div>
            <span>the best website in the world</span>
        </div>

{/*Hero heading*/}

<div className='hero-text'>
    <div>
        <span className='stroke-text'>Business Upgradation </span>
        <span>  From The Legacy
 </span>
    </div>
    <div>
        <span>Process To Automation</span>
    </div>
    <div>
      <span>
      By helping companies automate and manage in business process automation,
we help companies reduce man hour costs.
      </span>
    
    </div>
</div>



{/* figures*/}

<div className="figure">
  <div>
  
    <span>
      <NumberCounter end={140} start={100} delay='4' preFix="+"/></span>
    <span>experts trainers</span><br/>
  </div>
  <div>
  <span>
  <NumberCounter end={978} start={800} delay='4' preFix="+"/></span>
    <span>members joined</span>
  </div>
  <div>
  <span>
  <NumberCounter end={50} start={20} delay='4' preFix="+"/></span>
    <span>developers</span>
  </div>
</div>

{/*hero buttons*/}
<div className="hero-buttons">
  <button className="btn">Get Started</button>
  <button className="btn">Learn More</button>
</div>
      </div>





      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <motion.div 
        initial={{ right: '-1rem'}}
        whileInView={{ right: '4rem' }}
        transition={transition}
        className='heart-rate'>
          <img src='heart.png' alt='' />
            <span>Heart Rate</span>
            <span>116 bpm</span>
         
        </motion.div>

        <img src="main.jpg" alt="" className='hero-image' />
        <img src='front.jpg' alt='' className='hero-image-back' />
        <img src='developer_female.jpg' alt='' className='hero-image-back2' />

        {/* daily*/}

        <motion.div
        initial={{ right: '37rem'}}
        whileInView={{ right: '28rem' }}
        transition={transition}
        className='caleries'>
          <img src='graph.jpg' alt='' />
          <div>
          <span>Reent Updates</span>
          <span>220 </span>
          </div>
          
        </motion.div>
        </div>
    </div>
    </div>
  )
}
