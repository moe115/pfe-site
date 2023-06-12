
import './App.css';
import React from 'react';
import { BrowserRouter , Route  , Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AnimalPage from './pages/AnimalPage';
import FlowerPage from './pages/FlowerPage';

const App = () => {
  return (
    <div>

<BrowserRouter>
<div className="app">
  <Routes>
        <Route path='/' element={<><Navbar /> <Home />  </>     }  /> 
        <Route path='/AnimalPage' element={<><Navbar /> <AnimalPage />  </>}     />
        <Route path='/flower' element={<><Navbar /> <FlowerPage />  </>}     />
  </Routes>
</div> 
</BrowserRouter> 


    </div>
   
  );
};

export default App;