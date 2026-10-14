
import { useEffect } from 'react';
import * as PageFunctions from './scripts/PageFunctions.jsx';
import { CityPagesData } from '../data.js';
import FooterSection from './components/FooterSection.jsx';

function CityPageTest({groupClass, city_id}) {
  const cityData = CityPagesData.find((c) => c.id == city_id);
  useEffect(() => {
    return PageFunctions[cityData.pageInitFunction]();
  }, []); // Empty dependency array means this runs only once on mount
  return (
    <div className={groupClass}>
      <header>
        <p className='space_holder'></p>
        <div className='header_container' style={{ 
        '--dynamic-bg':PageFunctions.DynamicImageUrl({imageName:cityData.heroImage}), '--dynamic-ratio':cityData.heroRatio 
      }}>
          <div className='title'>
            <h1>{cityData.cityName}</h1>
            <h2>{cityData.cityDesc}</h2>
          </div>
        </div>
      </header>
      
      <section className='info_section'>
        <div className='info_container'>
          <div className='content'>
            <h1>City Background</h1>
            <p>{cityData.cityBackground}</p>
          </div>
          <div className="image_container">
            <div className="image1">
              {PageFunctions.DynamicImage({imageName:cityData.cityImage})}
            </div>
            
              {
              (cityData.cityImage2)?(<div className="image2">{PageFunctions.DynamicImage({imageName:cityData.cityImage2})}</div>):""
              
              }
          </div>
        </div>
      </section>

      <section className='culture_section'>
        <div className='culture_container'>
          <div className='content'>
            <h1>City Culture</h1>
            <p className='culture'>{cityData.culture}</p>
            <p className='quote'>{cityData.quote}</p>
          </div>
        </div>
      </section>

      <section className='landmark_section'>
        <div className='landmark_container'>
          <div className='content'>
            <h1>City Landmarks</h1>
            <div className="cards_container">
              {cityData.landmarks.map((landmark)=>{
                return (
                <div className="card" key={landmark.id}>
                  {PageFunctions.DynamicImage({imageName:landmark.image})}
                  <article>
                    <h1>{landmark.title}</h1>
                    <p>{landmark.info}</p>
                  </article>
                </div>
              )
              })}
            </div>
          </div>
        </div>
      </section>
      
      <FooterSection></FooterSection>
    </div>
  )
}

export default CityPageTest

