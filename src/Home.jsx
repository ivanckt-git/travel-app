import { useState } from 'react'
import { useEffect } from 'react';
import { cityData } from '../data';
import { Link, NavLink } from 'react-router';
import HomeGrid from './components/HomeGrid';

import {onHomeInit} from './scripts/PageFunctions.jsx';

import FooterSection from './components/FooterSection.jsx';
function Home() {

  useEffect(() => {
    return onHomeInit();
  }, []); // Empty dependency array means this runs only once on mount
  
  return (
    <div className="home_container">
      <header>
        <p className='space_holder'></p>
        <div className='header_container'>
          <div className='heading2'>City Ventures</div>
          <div className='heading1'>
            <span className='first'>C</span><span className='masked-text'>ity </span><span className='first'>V</span><span className='masked-text'>entures</span>
          </div>
          
          <h2>1 planet, 4 cities, Will you survive?</h2>
        </div>
        <div className='headerBg'></div>
      </header>
      
      <section className='city_section'>
        <div id="city" className="city_container">
          <div className='mask_layer'/>
          <ul className="city_list">
            <li className="city_list_item" id="sky"></li>
            <Link to='About'><li className="city_list_item" id="city_b"></li></Link>
            <li className="city_list_item" id="city_d"></li>
            <li className="city_list_item" id="city_c"></li>
            <li className="city_list_item" id="city_a"></li>
            <li className="city_list_item" id="mountain"></li>
          </ul>
        </div>
        <h1>Explore a city</h1>
        <div className="detailsOverlay">
          <h2>City A</h2>
          <p>A bustling coastal tropical portal with standardized compass navigation</p>
        </div>
      </section>

      <HomeGrid></HomeGrid>

      <FooterSection></FooterSection>
    </div>
  )
}

export default Home

