import { div, footer, main } from 'framer-motion/client';
import './App.css'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok} from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='header'>
      <motion.div 
        className='logo'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/assets/Logo-Zodia-2.png" alt="Logo Zodia" />
        <h1>Zodia</h1>
      </motion.div>

        
      <nav className='navbar'>
        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#home">Home</a></li>
          <li><a href="#katalog">Katalog</a></li>
          <li><a href="#footer">Medsos</a></li>
        </ul>
        
        <li className='ham-menu'><a href="#" onClick={() => setMenuOpen(!menuOpen)}><MdMenu></MdMenu></a></li>
      </nav>
    </header>
  )
}

function Card() {
  return (
    <div className='card'>
      <img src='assets/sagitarius1.jpeg' alt="" />
      <h2>Sagitarius</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Harum rerum repudiandae consequuntur officia quas veritatis?</p>
      <a href="https://tokopedia.com">Beli Sekarang!</a>
    </div>
  )
}

function Katalog() {
  return (
    <main className='katalog' id='katalog'>

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

    <main className='home' id='home'> 
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
    <footer className='footer' id='footer'>

      <div className='cp'>
        <p>© {new Date().getFullYear()} Zodia. All rights reserved.</p>
      </div>

      <div className='medsos'>
        <ul>
          <li>
            <a href="https://www.tiktok.com/@zodia.apparel?" className='icons'><FaTiktok /></a>
            <a href="https://www.instagram.com/zodia.n.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='icons'><FaInstagram /></a>
            <a href="mailto:apparelzodia@gmail.com" className='icons'><FaFacebook /></a>
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

