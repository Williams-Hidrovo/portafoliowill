import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
function App() {
  return (
    <main className="max-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
