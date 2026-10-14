// import tour1 from "./src/assets/shoe1.png"
// import tour2 from "./src/assets/shoe2.png"
// import tour3 from "./src/assets/shoe3.png"


export const pageLinks =[
    {id:1, href:"/", text: "home"},
    {id:2, href:"citya", text: "City A"},
    {id:3, href:"cityb", text: "City B"},
    {id:4, href:"cityc", text: "City C"},
    {id:5, href:"cityd", text: "City D"}
]

export const socialLinks =[
    {id:1, href:"https://www.facebook.com", iconClass:"fa-brands fa-facebook"},
    {id:2, href:"https://www.threads.com", iconClass:"fa-brands fa-threads", className:"threads"},
    {id:3, href:"https://www.twitter.com", iconClass:"fa-brands fa-x-twitter", className:"twitter"}
]

export const cityData =[
    {id:1, cityID:"city_a", cityName:"Midgar (City A)", details:"Eight Mako reactors, one plate, and two cities. The rich live on top in the light, the rest live below in its shadow", overlayLeft:-40},
    {id:2, cityID:"city_b", cityName:"Lindblum (City B)", details:"The sky-city of airships. Steam, steel, and theater — Lindblum builds the airships that connect the world", overlayLeft: 15},
    {id:3, cityID:"city_c", cityName:"Black Mage Village (City C)", details:"A hidden village of puppets who learned to be people. No weapons, just chocobos, a cemetery and a forest", overlayLeft: 40},
    {id:4, cityID:"city_d", cityName:"Cosmo Canyon (City D)", details:"A red desert city that listens to the Planet. Part observatory, part village, home to the study of the Lifestream", overlayLeft: -20}
]

export const CityPagesData =[
    {
        id:1, 
        pageInitFunction:"onPageAInit",
        heroImage: "citya_wide_c.jpeg",
        heroRatio: 1408/768,
        cityName: "Midgar (City A)",
        cityDesc: "Floating City of Mako and Steel",
        cityBackground: "A circular eight-reactor city Shinra built on a wasteland 50 years ago. To efficiently extract Mako, they built a 300-meter-high steel plate, dividing citizens by class. The rich live on top, workers below",
        cityImage:"city_a_tran.png",
        cityImage2:"city_a_tran_night.png",
        culture:'Extreme class divide. The upper plate is cyber-neon, artificial sun, Starbucks-style life; the lower is steam, scrap metal, a sunless slum culture that believes in "DIY or die." Upper folks talk stocks and Mako lights, lower folks talk how to make water filters from scrap. Both sides are dependent on Mako, but hate each other.',
        quote:'Quote: "In Midgar, the sky is a luxury you have to pay to see."',
        landmarks:[
            {id:1, image:"spot_a_1.jpg", title:"Mako Reactor", info:"Watch the green Lifestream being sucked up close — shocking and a little heartbreaking"},

            {id:2, image:"spot_a_2.jpg", title:"Seventh Heaven", info:"The bar at the bottom of the world. Under the shadow of the plate, this is the only place in the slums with warm light, cheap food, and loud rumors"},

            {id:3, image:"spot_a_3.jpg", title:"Shinra Tower", info:"70 floors, with a museum on the top floor overlooking the entire plate at night."}
        ]
    },
    {
        id:2, 
        pageInitFunction:"onPageBInit",
        heroImage: "cityb_wide_c.jpeg",
        heroRatio: 1408/768,
        cityName: "Lindblum (City B)",
        cityDesc: "The sky-city of airships",
        cityBackground: `Founded by Regent Cid, 800 years ago it was just a fortress. Now it's the first city-state to complete the "Mist + Steam" industrial revolution. Powered by Mist, its airships became a transport hub connecting cities`,
        cityImage:"city_b_tran.png",
        culture:'The sky-city of airships. Steam, steel, and theater — Lindblum builds the airships that connect the world, and throws a festival every time one flies. Grand, noisy, and always over-engineered',
        quote:`Quote: "You can't fix an engine? Good luck getting a date in Lindblum!"`,
        landmarks:[
            {id:1, image:"spot_b_1.jpg", title:"Airship Dock", info:"Watch SKYHUNTER REGALIA and RUNELIFT CARGO CO. take off and land — the buzzing sound is oddly healing"},

            {id:2, image:"spot_b_2.jpg", title:"Lindblum Castle", info:"Walls engraved with glowing runes that light up at night"},

            {id:3, image:"spot_b_3.jpg", title:"Festival Plaza", info:"A giant stag statue in the center, with BBQ and mulled wine stalls during the festival"}
        ]
    },
    {
        id:3, 
        pageInitFunction:"onPageCInit",
        heroImage: "cityc_wide_c.jpeg",
        heroRatio: 1408/768,
        cityName: "Black Mage Village (City C)",
        cityDesc: "The Forest City",
        cityBackground: "Built by the Black Mage dolls Kuja created for Queen Alexandria. After a magical malfunction gave them self-awareness, they fled and founded this village",
        cityImage:"city_c_tran.png",
        culture:'The most philosophical village. No currency, no hierarchy. The core question is "Why do we live?"',
        quote:'Quote: "I only just learned what goodbye means yesterday. Today I have to learn how to remember them."',
        landmarks:[
            {id:1, image:"spot_c_1.jpg", title:"Philosophy Hut", info:'Center of the village, with a wooden sign that says "We Build. We Think. We Are Free."'},

            {id:2, image:"spot_c_2.jpg", title:"Cemetery", info:'For every villager who passes, they erect a tombstone that says "Stopped."'},

            {id:3, image:"spot_c_3.jpg", title:"Chocobo Grass Hut", info:"The elder's house, hiding diaries about artificial life"}
        ]
    },
    {
        id:4, 
        pageInitFunction:"onPageDInit",
        heroImage: "cityd_wide_c.jpeg",
        heroRatio: 1376/768,
        cityName: "Cosmo Canyon (City D)",
        cityDesc: "The desert city",
        cityBackground: "An ancient Cetra stargazing site, later turned into a Planetology academy by the long-lived Bugenhagen.",
        cityImage:"city_d_tran.png",
        culture:'A chill and spiritual city. The whole village goes silent to listen to the Lifestream flowing. They believe "all things have life." Their daily life is music, weaving, and stargazing',
        quote:`Quote: "Can you hear it? There's a voice in the wind. It's the Planet breathing."`,
        landmarks:[
            {id:1, image:"spot_d_1.jpg", title:"Planetology Observatory", info:"On the mountain peak, where Bugenhagen summons holographic projections of the Planet."},

            {id:2, image:"spot_d_2.jpg", title:"Wind Chime Corridor", info:"Hung with dreamcatchers and life tapestries that make ethereal sounds when the wind blows"},

            {id:3, image:"spot_d_3.jpg", title:"Lifestream Spring", info:"A faintly glowing spring at the bottom of the canyon. Legend says one sip lets you hear the Planet whisper."}
        ]
    },
]

// export const services =[
//     {id:1, icon:"fa-solid fa-wallet", title:"Saving Money", info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temp"},
//     {id:2, icon:"fa-solid fa-tree", title:"Endless Hiking", info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temp"},
//     {id:3, icon:"fa-solid fa-socks", title:"Amazing Comfort", info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temp"},

// ]


// export const tours =[
//     {
//         id:1,
//         image: tour1,
//         date:"sep 25th 2025",
//         title:"Mount Everest",
//         info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
//         location:"China",
//         duration:"3",
//         price:"2100"
//     },
//     {
//         id:2,
//         image:tour2,
//         date:"oct 25th 2025",
//         title:"Mount Everest",
//         info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
//         location:"China",
//         duration:"4",
//         price:"2200"
//     },
//     {
//         id:3,
//         image: tour3,
//         date:"nov 25th 2025",
//         title:"Mount Everest",
//         info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
//         location:"China",
//         duration:"5",
//         price:"2300"
//     },
//     {
//         id:4,
//         image: tour1,
//         date:"dec 25th 2025",
//         title:"Mount Everest",
//         info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
//         location:"China",
//         duration:"6",
//         price:"2400"
//     },
// ]