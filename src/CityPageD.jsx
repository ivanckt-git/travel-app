
import { useEffect } from 'react';
import {onPageDInit} from './scripts/PageFunctions.jsx';
import FooterSection from './components/FooterSection.jsx';
import city_d_tran from '../images/city_d_tran.png';
import spot_d_1 from '../images/spot_d_1.jpg';
import spot_d_2 from '../images/spot_d_2.jpg';
import spot_d_3 from '../images/spot_d_3.jpg';

function CityPageD() {

  useEffect(() => {
    return onPageDInit();
  }, []); // Empty dependency array means this runs only once on mount
  
  return (
    <div className="page page_d_container">
      <header>
        <p className='space_holder'></p>
        <div className='header_container'>
          <div className='title'>
            <h1>Cosmo Canyon (City D)</h1>
            <h2>The desert city</h2>
          </div>
        </div>
      </header>
      
      <section className='info_section'>
        <div className='info_container'>
          <div className='content'>
            <h1>City Background</h1>
            <p>An ancient Cetra stargazing site, later turned into a Planetology academy by the long-lived Bugenhagen.</p>
          </div>
          <div className="image_container">
            <div className="image">
              <img src={city_d_tran}/>
            </div>
          </div>
        </div>
      </section>

      <section className='culture_section'>
        <div className='culture_container'>
          <div className='content'>
            <h1>City Culture</h1>
            <p className='culture'>A chill and spiritual city. The whole village goes silent to listen to the Lifestream flowing. They believe "all things have life." Their daily life is music, weaving, and stargazing.</p>
            <p className='quote'>Quote: "Can you hear it? There's a voice in the wind. It's the Planet breathing."</p>
          </div>
        </div>
      </section>

      <section className='landmark_section'>
        <div className='landmark_container'>
          <div className='content'>
            <h1>City Landmarks</h1>
            <div className="cards_container">
              <div className="card card1">
                <img src={spot_d_1} alt="" />
                <article>
                  <h1>Planetology Observatory</h1>
                  <p>On the mountain peak, where Bugenhagen summons holographic projections of the Planet.</p>
                </article>
              </div>

              <div className="card card1">
                <img src={spot_d_2} alt="" />
                <article>
                  <h1>Wind Chime Corridor</h1>
                  <p>Hung with dreamcatchers and life tapestries that make ethereal sounds when the wind blows</p>
                </article>
              </div>

              <div className="card card1">
                <img src={spot_d_3} alt="" />
                <article>
                  <h1>Lifestream Spring</h1>
                  <p>A faintly glowing spring at the bottom of the canyon. Legend says one sip lets you hear the Planet whisper.</p>
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

export default CityPageD

