import React from 'react';
import Home from './components/Home';
import Biosound from './pages/biosound.js';
import CompVis from './pages/compvis.js';
import Graphics from './pages/graphics.js';
import SpamOrHam from './pages/spamorham.js';
import WordleGuesser from './pages/wordleguesser.js';
import SocialMedia from './pages/socialmedia.js';
import Worm from './pages/worm.js';
import Website from './pages/website.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-white font-randygg'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/biosound' element={<Biosound/>}/>
          <Route path='/compvis' element={<CompVis/>}/>
          <Route path='/graphics' element={<Graphics/>}/>
          <Route path='/spamorham' element={<SpamOrHam/>}/>
          <Route path='/wordleguesser' element={<WordleGuesser/>}/>
          <Route path='/socialmedia' element={<SocialMedia/>}/>
          <Route path='/worm' element={<Worm/>}/>
          <Route path='/Website' element={<Website/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
