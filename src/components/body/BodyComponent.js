import React from 'react';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contract from './Contract';

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contract' element={<Contract />} />
      </Routes>
    </div>
  );
};

export default BodyComponent;
