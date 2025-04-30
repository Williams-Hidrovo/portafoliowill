import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="w-full h-[50px] flex justify-around items-center ">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white font-bold shadow-md p-5 flex justify-between items-center">
        <p className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">WH</p>
      </NavLink>
      <nav className="flex text-lg font-bold gap-7">
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar
