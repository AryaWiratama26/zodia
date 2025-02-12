import { div, main } from 'framer-motion/client';
import './App.css'
import { motion } from 'framer-motion'

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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorum, minus cupiditate fugit saepe ad corporis quas hic recusandae
          in ipsum aliquam excepturi a possimus mollitia, fugiat repellendus laudantium corrupti!</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
    <Navbar /> 
    <Home />
    <Katalog />
    </>
  );

}

export default App

