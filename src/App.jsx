import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// BOOTSTRAP
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// PAGES
import Navbar from './components/navbar'
import Home from './pages/home'
import Contact from './pages/about'
import Service from './pages/service'
import About from './pages/about'
import Footer from './components/footer'
import Corporate from './pages/corporate'
import Wedding from './pages/wedding'
import Catering from './pages/catering'
import Birthday from './pages/birthday'
import Parties from './pages/parties'
import Venues from './pages/venues'
import Menu from './pages/menu'

// PAGES

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        
        <Route path="/contact" element={<Contact />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/event" element={<Event/>} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/Venues" element={<Venues />} />

        <Route path="/menu" element={<Menu />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
