import { socialLinks } from '../../data';
import { useEffect } from 'react';

const HomeGrid = ({groupClass, listItemClass}) => {
        useEffect(() => {
            let cityA = document.querySelector(".grid_item1");
            let cityB = document.querySelector(".grid_item2");
            let cityC = document.querySelector(".grid_item3");
            let cityD = document.querySelector(".grid_item4");
            let cities = [cityA, cityB, cityC, cityD];

            const onCityMouseOver = (city, index) => {
            if( !city.classList.contains("active")){
                city.classList.add('active');
                dimAllCities();
            }
            }
            const onCityMouseOut = (city, index) => {
                if(city.classList.contains("active")){
                    city.classList.remove('active');
                    undimAllCities();
                }
            }

            function dimAllCities(){
            cities.forEach((city, index) =>{
                if(!city.classList.contains("inactive") && !city.classList.contains("active")){
                city.classList.add('inactive');
                }
            })
            }

            function undimAllCities(){
            cities.forEach((city, index) =>{
                if(city.classList.contains("inactive")){
                city.classList.remove('inactive');
                }
            })
                }

            cities.forEach((city, index) => {
                city.addEventListener('mouseover', onCityMouseOver.bind(null, city, index));
                city.addEventListener('mouseout', onCityMouseOut.bind(null, city, index));
            });

            return () => {
                cities.forEach((city, index) =>{
                    city.removeEventListener("mouseover", onCityMouseOver);
                    city.removeEventListener("mouseout", onCityMouseOut);
                });
            };
        }, []); // Empty dependency array means this runs only once on mount


        return (
            <section className="grid_session">
                <article>
                    <h1>Cities Views</h1>
                    <p>The 4 most iconic cities in the Planet</p>
                </article>
                <div className='grid_container'>
                    <div className="grid">
                        <div className="grid_item grid_item1"></div>
                        <div className="grid_item grid_item2"></div>
                        <div className="grid_item grid_item3"></div>
                        <div className="grid_item grid_item4"></div>
                    </div>
                </div>
            </section>
        )
    
}

export default HomeGrid