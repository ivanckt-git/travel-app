
import { useEffect } from 'react';
import {onPageCInit} from './scripts/PageFunctions.jsx';
import FooterSection from './components/FooterSection.jsx';
import city_c_tran from '../images/city_c_tran.png';
import spot_c_1 from '../images/spot_c_1.jpg';
import spot_c_2 from '../images/spot_c_2.jpg';
import spot_c_3 from '../images/spot_c_3.jpg';

function CityPageC() {

  useEffect(() => {
    return onPageCInit();
  }, []); // Empty dependency array means this runs only once on mount
  
  return (
    <div className="page page_c_container">
      <header>
        <p className='space_holder'></p>
        <div className='header_container'>
          <div className='title'>
            <h1>Black Mage Village (City C)</h1>
            <h2>The Forest City</h2>
          </div>
        </div>
      </header>
      
      <section className='info_section'>
        <div className='info_container'>
          <div className='content'>
            <h1>City Background</h1>
            <p>Built by the Black Mage dolls Kuja created for Queen Alexandria. After a magical malfunction gave them self-awareness, they fled and founded this village</p>
          </div>
          <div className="image_container">
            <div className="image">
              <img src={city_c_tran}/>
            </div>
          </div>
        </div>
      </section>

      <section className='culture_section'>
        <div className='culture_container'>
          <div className='content'>
            <h1>City Culture</h1>
            <p className='culture'>The most philosophical village. No currency, no hierarchy. The core question is "Why do we live?"</p>
            <p className='quote'>Quote: "I only just learned what goodbye means yesterday. Today I have to learn how to remember them."</p>
          </div>
        </div>
      </section>

      <section className='landmark_section'>
        <div className='landmark_container'>
          <div className='content'>
            <h1>City Landmarks</h1>
            <div className="cards_container">
              <div className="card card1">
                <img src={spot_c_1} alt="" />
                <article>
                  <h1>Philosophy Hut</h1>
                  <p>Center of the village, with a wooden sign that says "We Build. We Think. We Are Free."</p>
                </article>
              </div>

              <div className="card card1">
                <img src={spot_c_2} alt="" />
                <article>
                  <h1>Cemetery</h1>
                  <p>For every villager who passes, they erect a tombstone that says "Stopped."</p>
                </article>
              </div>

              <div className="card card1">
                <img src={spot_c_3} alt="" />
                <article>
                  <h1>Chocobo Grass Hut</h1>
                  <p>The elder's house, hiding diaries about artificial life</p>
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

export default CityPageC

