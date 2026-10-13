
import { useEffect } from 'react';
import {onPageAInit} from './scripts/PageFunctions.jsx';
import FooterSection from './components/FooterSection.jsx';
import city_a_tran from '../images/city_a_tran.png';
import city_a_tran_night from '../images/city_a_tran_night.png';
import spot_a_1 from '../images/spot_a_1.jpg';
import spot_a_2 from '../images/spot_a_2.jpg';
import spot_a_3 from '../images/spot_a_3.jpg';

function CityPageA() {

  useEffect(() => {
    return onPageAInit();
  }, []); // Empty dependency array means this runs only once on mount
  
  return (
    <div className="page page_a_container">
      <header>
        <p className='space_holder'></p>
        <div className='header_container'>
          <div className='title'>
            <h1>Midgar (City A)</h1>
            <h2>Floating City of Mako and Steel</h2>
          </div>
        </div>
      </header>
      
      <section className='info_section'>
        <div className='info_container'>
          <div className='content'>
            <h1>City Background</h1>
            <p>A circular eight-reactor city Shinra built on a wasteland 50 years ago. To efficiently extract Mako, they built a 300-meter-high steel plate, dividing citizens by class. The rich live on top, workers below</p>
          </div>
          <div className="image_container">
            <div className="image1">
              <img src={city_a_tran}/>
            </div>
            <div className="image2">
              <img src={city_a_tran_night}/>
            </div>
          </div>
        </div>
      </section>

      <section className='culture_section'>
        <div className='culture_container'>
          <div className='content'>
            <h1>City Culture</h1>
            <p className='culture'>Extreme class divide. The upper plate is cyber-neon, artificial sun, Starbucks-style life; the lower is steam, scrap metal, a sunless slum culture that believes in "DIY or die." Upper folks talk stocks and Mako lights, lower folks talk how to make water filters from scrap. Both sides are dependent on Mako, but hate each other.</p>
            <p className='quote'>Quote: "In Midgar, the sky is a luxury you have to pay to see."</p>
          </div>
        </div>
      </section>

      <section className='landmark_section'>
        <div className='landmark_container'>
          <div className='content'>
            <h1>City Landmarks</h1>
            <div className="cards_container">
              <div className="card card1">
                <img src={spot_a_1} alt="" />
                <article>
                  <h1>Mako Reactor</h1>
                  <p>Watch the green Lifestream being sucked up close — shocking and a little heartbreaking</p>
                </article>
              </div>

              <div className="card card1">
                <img src={spot_a_2} alt="" />
                <article>
                  <h1>Seventh Heaven</h1>
                  <p>The bar at the bottom of the world. Under the shadow of the plate, this is the only place in the slums with warm light, cheap food, and loud rumors</p>
                </article>
              </div>

              <div className="card card1">
                <img src={spot_a_3} alt="" />
                <article>
                  <h1>Shinra Tower</h1>
                  <p>70 floors, with a museum on the top floor overlooking the entire plate at night.</p>
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

export default CityPageA

