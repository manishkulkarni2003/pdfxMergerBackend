import { useState } from 'react';

import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feature from './components/Feature';
function App() {
 

  

  return (
    <>
    <div>
      

      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/feature' element={<Feature/>}/>
      
      </Routes>
    </div>
    </>

  );
}

export default App;

//Lets do this with spring boot
//backend Setup Done now Git setuo and css setup left to do
