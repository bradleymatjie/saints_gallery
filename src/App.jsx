import { useState } from 'react';
import { Routes, Route } from 'react-router-dom' 
import './App.css';

import { Header } from './Components/Header/Header';
import { MobileMenu } from './Components/MobileMenu/MobileMenu';
import { Potraits } from './Pages/Potraits/Potraits';
import { About } from './Pages/About/About';
import { Landscape } from './Pages/Landscape/Landscape';
import { Quotes } from './Pages/Quotes/Quotes';


function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  const removeMenu = () => {
    setMenuToggler(prev => false);
  }


  return (
    <div className="App">
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu removeMenu={removeMenu} menuToggler={menuToggler} />
      <Routes>
          <Route path='/saints_gallery/' element={<Potraits />} />
          <Route path='/saints_gallery/Landscapes' element={<Landscape />} />
          <Route path='/saints_gallery/Quotes' element={<Quotes />} />
          <Route path='/saints_gallery/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
