import React from 'react';
import { Routes, Route } from 'react-router';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Home from './Home';
import About from './About';
import CityPageA from './CityPageA';
import CityPageB from './CityPageB';
import CityPageC from './CityPageC';
import CityPageD from './CityPageD';

import PageLinks from './components/PageLinks';
import SocialLinks from './components/SocialLinks';
import siteLogo from '../images/site_logo_transparent.png';

function App() {
  return (
    <>
      <main>
        <nav>
          <div>
            <a href='/#city'>
              {/* <i className="fa-brands fa-fort-awesome"></i> */}
              <img src={siteLogo} className="site_logo" alt="" />
            </a>
          </div>
          <div><PageLinks groupClass="main-menu-list"></PageLinks></div>
          <div>
            <SocialLinks groupClass="nav-icons" listItemClass={"nav-icon"}/></div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel-app/" element={<Home />} />
          <Route path="/citya" element={<CityPageA />} />
          <Route path="/cityb" element={<CityPageB />} />
          <Route path="/cityc" element={<CityPageC />} />
          <Route path="/cityd" element={<CityPageD />} />
        </Routes>
      </main>
    </>
  );
}

export default App;