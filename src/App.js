import React from 'react';
import Home from './pages/Home';
import Biosound from './pages/Biosound.js';
import AutoChickFeed from './pages/Autochickfeed.js';
import Server from './pages/Server.js';
import CompVis from './pages/Compvis.js';
import Graphics from './pages/Graphics.js';
import SpamOrHam from './pages/Spamorham.js';
import WordleGuesser from './pages/Wordleguesser.js';
import SocialMedia from './pages/Socialmedia.js';
import Worm from './pages/Worm.js';
import Website from './pages/Website.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-white font-randygg'>
      <Router>
        <Routes>
          <Route path='/' element={<Home id='Home'/>}/>
          <Route path='/Biosound' element={<Biosound id='Biosound'/>}/>
          <Route path='/Autochickfeed' element={<AutoChickFeed id='AutoChickFeed'/>}/>
          <Route path='/Server' element={<Server id='Server'/>}/>
          <Route path='/Compvis' element={<CompVis id='CompVis'/>}/>
          <Route path='/Graphics' element={<Graphics id='Graphics'/>}/>
          <Route path='/Spamorham' element={<SpamOrHam id='SpamOrHam'/>}/>
          <Route path='/Wordleguesser' element={<WordleGuesser id='WordleGuesser'/>}/>
          <Route path='/Socialmedia' element={<SocialMedia id='SocialMedia'/>}/>
          <Route path='/Worm' element={<Worm id='Worm'/>}/>
          <Route path='/Website' element={<Website id='Website'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
