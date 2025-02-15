import { div, footer, main } from 'framer-motion/client';
import './App.css'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';


function Navbar() {
  return (
    <header className='header'>
      <motion.div 
        className='logo'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/assets/logo-zodia.png" alt="Logo Zodia" />
        <h1>Zodia</h1>
      </motion.div>

      <nav className='navbar'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Katalog</a></li>
          <li><a href="#">Our Medsos</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Card() {
  return (
    <div className='card'>
      <img src="/assets/sagitarius1.jpeg" alt="" />
      <h2>Sagitarius</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Harum rerum repudiandae consequuntur officia quas veritatis?</p>
      <a href="#">Beli Sekarang!</a>
    </div>
  )
}

function Katalog() {
  return (
    <main className='katalog'>

      <h1>Katalog</h1>

      <div className='p-card'>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </main>
  );
}

function Home() {
  return (

    <main className='home'> 
      <div className='logo-zodia'>
        <img src="/assets/logo-zodia.png" alt="" />
      </div>

      <div className='home-desc'>
        <h1>Zodia</h1>
        <p>
            A gift written in the stars
            <br/>
            <b>because it's made for you, inspired by you</b>
        </p>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className='footer'>

      <div className='cp'>
        <p>© {new Date().getFullYear()} Zodia. All rights reserved.</p>
      </div>

      <div className='medsos'>
        <ul>
          <li>
            <a href="#" className='icons'><FaFacebook /></a>
            <a href="#" className='icons'><FaInstagram /></a>
            <a href="#" className='icons'><FaTwitter /></a>
          </li>
        </ul>
      </div>

    </footer>
  );
}


function App() {
  return (
    <>
    <Navbar /> 
    <Home />
    <Katalog />
    <Footer />
    </>
  );

}

export default App

