
import './App.css';
import React from 'react';
import Programs from './components/Hero/Programs/Programs';

import Hero from './components/Hero/Hero';
import Reason from './components/Hero/Reasons/Reason';
import Plans from './components/Hero/Plans/Plans';
import Testimonials from './components/Hero/Testimonials/Testimonials';
import Join from './components/Hero/Join';
import Footer from './components/Hero/Footer/Footer';
import Customer from './components/Hero/Customers/Customer';

function App() {
  return (
    <>
    <Hero />
    <Programs />
    <Reason />
    <Plans />
    <Customer />
    <Testimonials />
    <Join />
    <Footer />
   


    </>
  );
}

export default App;
