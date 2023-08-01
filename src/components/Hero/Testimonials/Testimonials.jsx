import React, { useState } from 'react';
import "./Testimonials.css";
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import testimonialsData from '../data/testimonialsData';



export default function Testimonials() {
  const transition = {type: 'spring', duration : 3}

    const [selected, setselected] = useState(0);
    const tLength = testimonialsData.length;



  return (
    <div id='testimonial'>
    <div className="testimonials">
        <div className='left-t'>


        <span>Testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>

        <motion.span
         key={selected}
         initial={{ opacity: 0, x: 100}}
         animate={{ opacity: 1, x: 0 }}
         exit={{opacity: 0, x: -100}}
         transition={transition}
        >
            {testimonialsData[selected].review}
        </motion.span>

        <span>
            <span style={{color:'orange'}}>
                {testimonialsData[selected].name}
            </span>{" "}
           - {testimonialsData[selected].status}
        </span>
        </div>
        
        <div className='right-t'>
            <motion.div
            initial={{ opacity: 0, x: -100}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.div
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100}}
            animate={{ opacity: 1, x: 0 }}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[selected].image} alt='' />
          <div className='arrows'>
        
          <FaArrowLeft color='white' 
          onClick={() =>{
            selected === 0
            ? setselected(tLength - 1)
            : setselected((prev) => prev -1);
        }}
          />
        
      <FaArrowRight color='white'
      onClick={() =>{
        selected === tLength - 1
        ? setselected(0)
        : setselected((prev) => prev + 1); 
      }}
      />
          </div>
        </div>
    </div>
    </div>
  )
}
