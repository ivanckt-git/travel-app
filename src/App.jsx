import React from 'react';
import { Routes, Route } from 'react-router';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Home from './Home';
import CityPageA from './CityPageA';
import CityPageB from './CityPageB';
import CityPageC from './CityPageC';
import CityPageD from './CityPageD';
import CityPageTemplate from './CityPageTemplate'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel-app/" element={<Home />} />
          <Route path="/citya" element={<CityPageTemplate key="1" groupClass="page page_a_container" city_id="1"/>} />
          <Route path="/cityb" element={<CityPageTemplate key="2" groupClass="page page_b_container" city_id="2"/>} />
          <Route path="/cityc" element={<CityPageTemplate key="3" groupClass="page page_c_container" city_id="3"/>} />
          <Route path="/cityd" element={<CityPageTemplate key="4" groupClass="page page_d_container" city_id="4"/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;