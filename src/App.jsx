import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Adminscreen from './Components/Adminscreen';
import Order from './Components/Order';
import { useEffect, useState } from 'react';
import Entry from './Pages/Entry';

function App() {
  const location = useLocation();
  const isEntryPage = location.pathname === "/";

  return (
    <>
     
      {!isEntryPage && <Header/>}

      <Routes>
        <Route path="entry" element={<Entry />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartmodal" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<Adminscreen />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
