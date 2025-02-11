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

function App() {
  return <Navbar />  
}

export default App
