import React from 'react';
import Hero from './hero';
import Houses from './houses';
import About from './about';
import Testimonial from './testimonial';
import Calltoaction from './calltoaction';
import Contactus from './contactus';
import Footer from './footer';
const Layout = () => {
  return (
    <div>
   <Hero /> 
    <Houses />
     <About />
     <Testimonial />
    <Calltoaction /> 
    <Contactus /> 
 <Footer /> 


    </div>
  );
};

export default Layout;