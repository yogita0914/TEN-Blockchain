import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { menuItems } from './data/MenuItems';
import { AboutUs } from './pages/AboutUs';
import Contact from './pages/Contact';

export function App() {
  return (
    <BrowserRouter>
        <Navbar menuItems={menuItems} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer menuItems={menuItems} />
    </BrowserRouter>
  );
}

export default App;
