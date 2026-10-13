import { useState } from 'react'
import { useEffect } from 'react';
import { cityData } from '../data.js';
import { Link, NavLink } from 'react-router';
import HomeGrid from './components/HomeGrid.jsx';

import {onPageBInit} from './scripts/PageFunctions.jsx';
import siteLogo from '../images/site_logo_transparent.png';
import FooterSection from './components/FooterSection.jsx';

function CityPageB() {

  useEffect(() => {
    return onPageBInit();
  }, []); // Empty dependency array means this runs only once on mount
  
  return (
    <div className="page page_b_container">
      <header>
        <p className='space_holder'></p>
        <div className='header_container'>
          <div className='title'>
            <h1>Lindblum (City B)</h1>
            <h2>The sky-city of airships</h2>
          </div>
        </div>
      </header>
      
      <section className='info_section'>
        <div className='info_container'>
          <div className='content'>
            <h1>City Background</h1>
            <p>Founded by Regent Cid, 800 years ago it was just a fortress. Now it's the first city-state to complete the "Mist + Steam" industrial revolution. Powered by Mist, its airships became a transport hub connecting cities</p>
          </div>
          <div className="image_container">
            <div className="image">
              <img src='../images/city_b_tran.png'/>
            </div>
          </div>
        </div>
      </section>

      <section className='culture_section'>
        <div className='culture_container'>
          <div className='content'>
            <h1>City Culture</h1>
            <p className='culture'>The sky-city of airships. Steam, steel, and theater — Lindblum builds the airships that connect the world, and throws a festival every time one flies. Grand, noisy, and always over-engineered</p>
            <p className='quote'>Quote: "You can't fix an engine? Good luck getting a date in Lindblum!"</p>
          </div>
        </div>
      </section>

      <section className='landmark_section'>
        <div className='landmark_container'>
          <div className='content'>
            <h1>City Landmarks</h1>
            <div className="cards_container">
              <div className="card card1">
                <img src="../images/spot_b_1.jpg" alt="" />
                <article>
                  <h1>Airship Dock</h1>
                  <p>Watch SKYHUNTER REGALIA and RUNELIFT CARGO CO. take off and land — the buzzing sound is oddly healing</p>
                </article>
              </div>

              <div className="card card1">
                <img src="../images/spot_b_2.jpg" alt="" />
                <article>
                  <h1>Lindblum Castle</h1>
                  <p>Walls engraved with glowing runes that light up at night</p>
                </article>
              </div>

              <div className="card card1">
                <img src="../images/spot_b_3.jpg" alt="" />
                <article>
                  <h1>Festival Plaza</h1>
                  <p>A giant stag statue in the center, with BBQ and mulled wine stalls during the festival</p>
                </article>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <FooterSection></FooterSection>
    </div>
  )
}

export default CityPageB

