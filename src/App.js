import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import DefaultLayout from './layouts/Default';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
