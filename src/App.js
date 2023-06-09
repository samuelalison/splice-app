import React from 'react';
import { Navbar, Hero, Feature, Sound, Packs, Build, Sync, Creators, Music, Footer } from './components';
import './App.css';


const App = () => {
  return (
    <div className="">
       <div className='app_header'>
       <div className='app-header2'>
          <Navbar />
          <Hero />
       </div>
       </div>
          <Feature />
          <Sound />
          <Packs />
          <Build />
          <Sync />
          <Creators />
          <Music />
          <Footer />
       
    </div>
  );
}

export default App;