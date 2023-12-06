import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import DefaultLayout from './layouts/Default';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
