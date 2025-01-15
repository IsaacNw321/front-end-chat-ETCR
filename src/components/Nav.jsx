import {  Link } from 'react-router-dom';
import './Nav.css'
function Navigation(){
  return(
    <nav className="nav-bar">
      <ul className='nav-menu.active'>
        <li className="nav-brand">
          <Link to={'/'}>Inicio</Link>
        </li>
        <li className="nav-brand">
          <Link to={'/profile'}>Perfil</Link>
        </li>
        <li className="nav-brand">
        <Link to={'/login'}>Iniciar Sesion</Link>
        </li>
      </ul>
    </nav>
  ) 
}

export default Navigation;