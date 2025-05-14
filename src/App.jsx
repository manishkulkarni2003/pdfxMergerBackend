import { useState } from 'react';

import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feature from './components/Feature';
import PdftoWord from './components/PdftoWord';
function App() {
 

  

  return (
    <>
    <div>
      

      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/feature' element={<Feature/>}/>
      <Route path='/pdftoword' element={<PdftoWord/>}/>
      
      </Routes>
    </div>
    </>

  );
}

export default App;

//Lets do this with spring boot
//backend Setup Done now Git setuo and css setup left to do
