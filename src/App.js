import React from 'react';
import Home from './components/Home';
import Biosound from './pages/biosound.js';
import AutoChickFeed from './pages/autochickfeed.js';
import Server from './pages/server.js';
import CompVis from './pages/compvis.js';
import Graphics from './pages/graphics.js';
import SpamOrHam from './pages/spamorham.js';
import WordleGuesser from './pages/wordleguesser.js';
import SocialMedia from './pages/socialmedia.js';
import Worm from './pages/worm.js';
import Website from './pages/website.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-white font-randygg'>
      <Router>
        <Routes>
          <Route path='/' element={<Home id='Home'/>}/>
          <Route path='/biosound' element={<Biosound id='Biosound'/>}/>
          <Route path='/autochickfeed' element={<AutoChickFeed id='AutoChickFeed'/>}/>
          <Route path='/server' element={<Server id='Server'/>}/>
          <Route path='/compvis' element={<CompVis id='CompVis'/>}/>
          <Route path='/graphics' element={<Graphics id='Graphics'/>}/>
          <Route path='/spamorham' element={<SpamOrHam id='SpamOrHam'/>}/>
          <Route path='/wordleguesser' element={<WordleGuesser id='WordleGuesser'/>}/>
          <Route path='/socialmedia' element={<SocialMedia id='SocialMedia'/>}/>
          <Route path='/worm' element={<Worm id='Worm'/>}/>
          <Route path='/Website' element={<Website id='Website'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
