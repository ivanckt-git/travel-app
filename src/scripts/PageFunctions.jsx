import { cityData } from '../../data';

export function onHomeInit () {
    window.scrollTo(0, 0);
    function onWindowScroll() {
        const layers = document.querySelectorAll('.city_list_item');
        let y = window.scrollY;
        const depths = [0,1,1,3,3,5];

        //update all layers Y position according to the scrollY
        layers.forEach((layer, i) => {
        if(y>500)
            y=500;
        layer.style.transform = `translateY(${(depths[i]*0.1) * y}px)`;
        })

        //Section 1
        //update hero header text according to the scrollY
        let header_text = document.querySelector(".home_container .header_container");
        if(y>380 && !header_text.classList.contains("active")){
        header_text.classList.add('active');
        }else if(y <=380 && header_text.classList.contains("active")){
        header_text.classList.remove('active');
        }


        //Section 2
        let cityContainer = document.querySelector(".city_container");
        let logo = document.querySelector(".site_logo");
        if(cityContainer.getBoundingClientRect().bottom <250 && !cityContainer.classList.contains("active")){
            cityContainer.classList.add('active');
            logo.classList.add('active');
        }else if(cityContainer.getBoundingClientRect().bottom >=250 && cityContainer.classList.contains("active")){
            cityContainer.classList.remove('active');
            logo.classList.remove('active');
        }

        //Section 3
        let gridSession = document.querySelector(".grid_session");
        if(cityContainer.getBoundingClientRect().bottom <250){
            if(gridSession.getBoundingClientRect().bottom <250 && !gridSession.classList.contains("active")){
                gridSession.classList.add('active');
            }else if(gridSession.getBoundingClientRect().bottom >=250 && gridSession.classList.contains("active")){
                gridSession.classList.remove('active');
            }

        }else{
            if(!gridSession.classList.contains("active")){
                gridSession.classList.add('active');
            }
        }

    }

    window.addEventListener('scroll',onWindowScroll,false);

    let cityA = document.getElementById("city_a");
    let cityB = document.getElementById("city_b");
    let cityC = document.getElementById("city_c");
    let cityD = document.getElementById("city_d");
    let details = document.querySelector(".detailsOverlay");
    let cities = [cityA, cityB, cityC, cityD];


    const onCityClick = (city, index)=>{
        console.log(cities[index])
    }
    const onCityMouseOver = (city, index) => {
        if( !city.classList.contains("active")){
        city.classList.add('active');
        dimAllCities();
        //show the city detail on overlay
        details.classList.add('active');
        details.childNodes[0].innerHTML = cityData[index].cityName;
        details.childNodes[1].innerHTML = cityData[index].details;
        }
    }
    const onCityMouseOut = (city, index) => {
        if(city.classList.contains("active")){
        city.classList.remove('active');
        details.classList.remove('active');
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

    // Store references to the exact bound functions so they can be cleaned up
    const boundHandlers = cities.map((city, index) => {
        return {
            click: onCityClick.bind(null, city, index),
            mouseover: onCityMouseOver.bind(null, city, index),
            mouseout: onCityMouseOut.bind(null, city, index)
        };
    });

    // Attach listeners
    cities.forEach((city, index) => {
        city.addEventListener("click", boundHandlers[index].click);
        city.addEventListener('mouseover', boundHandlers[index].mouseover);
        city.addEventListener('mouseout', boundHandlers[index].mouseout);
    });

    // Clean up and remove the listener when the component unmounts
    return () => {
        cities.forEach((city, index) => {
            city.removeEventListener("click", boundHandlers[index].click);
            city.removeEventListener("mouseover", boundHandlers[index].mouseover);
            city.removeEventListener("mouseout", boundHandlers[index].mouseout);
        });
        window.removeEventListener('scroll', onWindowScroll);
    };
}

export function onPageAInit(){
    window.scrollTo(0, 0);
    function onWindowScroll() {
        let y = window.scrollY;
        let image2 = document.querySelector(".page.page_a_container .image2");
        if(y>500 && !image2.classList.contains("active")){
            image2.classList.add('active');
        }else if(y <=500 && image2.classList.contains("active")){
            image2.classList.remove('active');
        }

    }
    window.addEventListener('scroll',onWindowScroll,false);
    const cleanup = initCards();

    // Clean up and remove the listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', onWindowScroll);
    };
}

export function onPageBInit(){
    window.scrollTo(0, 0);
    const cleanup = initCards();
    return () => {
        cleanup();
    };
}

export function onPageCInit(){
    window.scrollTo(0, 0);
    const cleanup = initCards();
    return () => {
        cleanup();
    };
}

export function onPageDInit(){
    window.scrollTo(0, 0);
    const cleanup = initCards();
    return () => {
        cleanup();
    };
}


function initCards(){
    let cards_container = document.querySelector(".cards_container");
    let cards = Array.from(document.querySelectorAll(".cards_container .card"));
    const onCardClick = (card, index)=>{

        if( !cards_container.classList.contains("active")){
            cards_container.classList.add('active');

            if( !card.classList.contains("focus")){
                card.classList.add('focus');
            }
            if(card.classList.contains("active")){
                card.classList.remove('active');
            }
            if(card.classList.contains("inactive")){
                card.classList.remove('inactive');
            }
            hideAllCards();
        }else{
            cards_container.classList.remove('active');

            if( card.classList.contains("focus")){
                card.classList.remove('focus');
            }
            if(!card.classList.contains("active")){
                card.classList.add('active');
            }
            showAllCards();
        }
        
        


    }
    const onCardMouseOver = (card, index) => {
        if( !card.classList.contains("active") && !card.classList.contains("focus")){
            card.classList.add('active');
        }
    }
    const onCardMouseOut = (card, index) => {
        if(card.classList.contains("active") && !card.classList.contains("focus")){
            card.classList.remove('active');
        }
    }

    function hideAllCards(){
        cards.forEach((card, index) =>{
        if(!card.classList.contains("inactive") && !card.classList.contains("active")&& !card.classList.contains("focus")){
            card.classList.add('inactive');
        }
        })
    }

    function showAllCards(){
        cards.forEach((card, index) =>{
        if(card.classList.contains("inactive")){
            card.classList.remove('inactive');
        }
        })
    }

    // Map bound event handlers to their elements
    const boundCardHandlers = cards.map((card, index) => {
        return {
            click: onCardClick.bind(null, card, index),
            mouseover: onCardMouseOver.bind(null, card, index),
            mouseout: onCardMouseOut.bind(null, card, index)
        };
    });


    cards.forEach((card, index) => {
        card.addEventListener("click", boundCardHandlers[index].click);
        card.addEventListener('mouseover', boundCardHandlers[index].mouseover);
        card.addEventListener('mouseout', boundCardHandlers[index].mouseout);
    });

    return () => {
        cards.forEach((card, index) => {
            card.removeEventListener("click", boundCardHandlers[index].click);
            card.removeEventListener("mouseover", boundCardHandlers[index].mouseover);
            card.removeEventListener("mouseout", boundCardHandlers[index].mouseout);
        });
    };
}