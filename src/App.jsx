import './App.css'


function Navbar() {
  return (
    <header className='header'>

      <div className='logo'>
        <img src="/assets/logo-zodia.png" alt="" />
        <h1>Zodia</h1>
      </div>

      <nav className='navbar'>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Katalog</a></li>
          <li><a href="">Our Medsos</a></li>
        </ul>
      </nav>
    </header>
  )
}

function App() {
  return (
    Navbar()
  )
}

export default App
