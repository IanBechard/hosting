import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Games from './routes/Games';

const Router = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/games' element={<Games />}></Route>
    </Routes>
  );
}

export default Router;