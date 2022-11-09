// import MyNavbar from './components/Navbar'
import About from './pages/About';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Contacts from './pages/Contacts';
import React from 'react';

import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div>
      <h1>Teste</h1>
      <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/contato' element={ <Contacts/>}/>
          <Route path='/sobre' element={ <About/>}/>
          <Route path='/fotos' element={ <Photos/>}/>
      </Routes>
    </div>
  );
}

export default App;
